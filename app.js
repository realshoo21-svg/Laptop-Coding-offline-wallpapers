// Tech Inspiration Hub - Main App Logic
class TechHub {
  constructor() {
    this.currentCategory = null;
    this.searchQuery = '';
    this.filters = {
      resolution: '',
      device: '',
      sort: 'newest'
    };
    this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.loadCategories();
    this.renderHomepage();
    this.setupOfflineMode();
  }

  setupEventListeners() {
    // Menu toggle
    document.getElementById('menuToggle').addEventListener('click', () => this.toggleMobileMenu());
    document.getElementById('menuClose').addEventListener('click', () => this.closeMobileMenu());
    document.getElementById('modalOverlay').addEventListener('click', () => this.closeModal());

    // Search
    document.getElementById('searchInput').addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      this.performSearch();
    });

    // Filters
    document.getElementById('resolutionFilter').addEventListener('change', (e) => {
      this.filters.resolution = e.target.value;
      this.applyFilters();
    });

    document.getElementById('deviceFilter').addEventListener('change', (e) => {
      this.filters.device = e.target.value;
      this.applyFilters();
    });

    document.getElementById('sortFilter').addEventListener('change', (e) => {
      this.filters.sort = e.target.value;
      this.applyFilters();
    });

    // Sidebar toggle
    document.getElementById('sidebarToggle').addEventListener('click', () => this.toggleSidebar());

    // Modal close
    document.querySelector('.modal-close').addEventListener('click', () => this.closeModal());

    // Keyboard close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });
  }

  loadCategories() {
    const categoryList = document.getElementById('categoryList');
    const mobileMenu = document.getElementById('mobileCategoryMenu');
    
    categoryList.innerHTML = '';
    mobileMenu.innerHTML = '';

    Object.entries(CATEGORIES).forEach(([key, category]) => {
      // Desktop sidebar
      const item = document.createElement('button');
      item.className = 'category-item';
      item.innerHTML = `<span>${category.icon}</span> <span>${category.name}</span>`;
      item.addEventListener('click', () => this.selectCategory(key));
      categoryList.appendChild(item);

      // Mobile menu
      const mobileItem = document.createElement('button');
      mobileItem.className = 'menu-category-item';
      mobileItem.innerHTML = `${category.icon} ${category.name}`;
      mobileItem.addEventListener('click', () => {
        this.selectCategory(key);
        this.closeMobileMenu();
      });
      mobileMenu.appendChild(mobileItem);
    });
  }

  selectCategory(categoryKey) {
    this.currentCategory = categoryKey;
    this.updateActiveCategory();
    this.renderCategoryPage();
  }

  updateActiveCategory() {
    document.querySelectorAll('.category-item').forEach(item => {
      item.classList.remove('active');
    });
    
    if (this.currentCategory) {
      const items = document.querySelectorAll('.category-item');
      const categoryIndex = Object.keys(CATEGORIES).indexOf(this.currentCategory);
      if (items[categoryIndex]) {
        items[categoryIndex].classList.add('active');
      }
    }
  }

  renderHomepage() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = '';

    // Render featured collections
    const featuredSection = document.createElement('section');
    featuredSection.className = 'section';
    featuredSection.innerHTML = `
      <h2 class="section-title">✨ Featured Collections</h2>
      <div class="wallpapers-grid" id="featuredGrid"></div>
    `;
    contentArea.appendChild(featuredSection);

    // Render homepage sections
    HOMEPAGE_SECTIONS.forEach(section => {
      const sectionEl = document.createElement('section');
      sectionEl.className = 'section';
      sectionEl.innerHTML = `
        <h2 class="section-title">${section.title}</h2>
        <div class="wallpapers-grid" id="${section.id}Grid"></div>
      `;
      contentArea.appendChild(sectionEl);
    });

    // Populate sections
    this.populateHomepageSections();
  }

  populateHomepageSections() {
    // Trending
    const trending = WALLPAPERS.filter(w => w.trending).slice(0, 6);
    this.renderWallpapers(trending, 'trendingGrid');

    // New uploads
    const newWallpapers = WALLPAPERS.filter(w => w.new).slice(0, 6);
    this.renderWallpapers(newWallpapers, 'new-uploadsGrid');

    // Popular
    const popular = WALLPAPERS.sort((a, b) => b.downloads - a.downloads).slice(0, 6);
    this.renderWallpapers(popular, 'popularGrid');

    // By category
    HOMEPAGE_SECTIONS.forEach(section => {
      if (section.category) {
        const categoryWallpapers = WALLPAPERS.filter(w => w.category === section.category).slice(0, 6);
        this.renderWallpapers(categoryWallpapers, `${section.id}Grid`);
      }
    });
  }

  renderCategoryPage() {
    if (!this.currentCategory) return;

    const category = CATEGORIES[this.currentCategory];
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = '';

    const header = document.createElement('div');
    header.innerHTML = `
      <div class="hero">
        <div class="hero-content">
          <h2 class="hero-title">${category.name}</h2>
          <p class="hero-subtitle">${category.description}</p>
          <div class="hero-features">${category.subcategories.join(' • ')}</div>
        </div>
      </div>
    `;
    contentArea.appendChild(header);

    const section = document.createElement('section');
    section.className = 'section';
    section.innerHTML = `
      <h2 class="section-title">Browse ${category.name}</h2>
      <div class="wallpapers-grid" id="categoryGrid"></div>
    `;
    contentArea.appendChild(section);

    const categoryWallpapers = WALLPAPERS.filter(w => w.category === this.currentCategory);
    this.renderWallpapers(categoryWallpapers, 'categoryGrid');
  }

  renderWallpapers(wallpapers, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    grid.innerHTML = '';

    if (wallpapers.length === 0) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column: 1/-1;">
          <div class="empty-state-icon">🔍</div>
          <h3>No wallpapers found</h3>
          <p>Try adjusting your filters or search query</p>
        </div>
      `;
      return;
    }

    wallpapers.forEach(wallpaper => {
      const card = document.createElement('div');
      card.className = 'wallpaper-card';
      card.innerHTML = `
        ${wallpaper.new ? '<div class="wallpaper-badge">New</div>' : ''}
        ${wallpaper.trending ? '<div class="wallpaper-badge">Trending</div>' : ''}
        <img src="${wallpaper.thumbnail}" alt="${wallpaper.title}" class="wallpaper-thumbnail">
        <div class="wallpaper-card-content">
          <div class="wallpaper-category">${CATEGORIES[wallpaper.category].name}</div>
          <h3 class="wallpaper-title">${wallpaper.title}</h3>
          <p class="wallpaper-quote">"${wallpaper.quote}"</p>
          <div class="wallpaper-stats">
            <div class="stat">⬇️ ${wallpaper.downloads}</div>
            <div class="stat">💾 ${wallpaper.cached ? 'Cached' : 'Online'}</div>
          </div>
        </div>
      `;
      
      card.addEventListener('click', () => this.openPreview(wallpaper));
      grid.appendChild(card);
    });
  }

  openPreview(wallpaper) {
    const modal = document.getElementById('previewModal');
    document.getElementById('modalTitle').textContent = wallpaper.title;
    document.getElementById('modalDescription').textContent = wallpaper.description;
    document.getElementById('modalCategory').textContent = CATEGORIES[wallpaper.category].name;
    document.getElementById('modalQuote').textContent = `"${wallpaper.quote}"`;
    document.getElementById('previewImage').src = wallpaper.thumbnail;

    // Download buttons
    const downloadButtons = document.getElementById('downloadButtons');
    downloadButtons.innerHTML = '';
    
    Object.entries(wallpaper.resolutions).forEach(([res, url]) => {
      const btn = document.createElement('button');
      btn.className = 'download-btn';
      const resLabel = {
        'mobile': 'Mobile (1080x1920)',
        'hd': 'HD (1280x720)',
        'fullhd': 'Full HD (1920x1080)',
        '2k': '2K (2560x1440)',
        '4k': '4K (3840x2160)'
      };
      btn.textContent = `⬇️ ${resLabel[res]}`;
      btn.addEventListener('click', () => this.downloadWallpaper(wallpaper.title, res, url));
      downloadButtons.appendChild(btn);
    });

    // Related wallpapers
    const relatedWallpapers = WALLPAPERS
      .filter(w => w.category === wallpaper.category && w.id !== wallpaper.id)
      .slice(0, 4);
    
    const relatedGrid = document.getElementById('relatedWallpapers');
    relatedGrid.innerHTML = '';
    relatedWallpapers.forEach(related => {
      const img = document.createElement('img');
      img.src = related.thumbnail;
      img.alt = related.title;
      img.className = 'related-thumb';
      img.addEventListener('click', () => this.openPreview(related));
      relatedGrid.appendChild(img);
    });

    modal.classList.add('active');
  }

  downloadWallpaper(title, resolution, url) {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title}-${resolution}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Log analytics
    console.log(`Downloaded: ${title} - ${resolution}`);
  }

  closeModal() {
    document.getElementById('previewModal').classList.remove('active');
  }

  performSearch() {
    if (!this.searchQuery.trim()) {
      this.renderHomepage();
      return;
    }

    const results = WALLPAPERS.filter(w => 
      w.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      w.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      w.quote.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = `
      <section class="section">
        <h2 class="section-title">Search Results for "${this.searchQuery}"</h2>
        <div class="wallpapers-grid" id="searchGrid"></div>
      </section>
    `;

    this.renderWallpapers(results, 'searchGrid');
  }

  applyFilters() {
    const filtered = WALLPAPERS.filter(w => {
      if (this.filters.resolution && !w.resolutions[this.filters.resolution]) {
        return false;
      }
      return true;
    });

    const sorted = filtered.sort((a, b) => {
      if (this.filters.sort === 'popular') {
        return b.downloads - a.downloads;
      } else if (this.filters.sort === 'trending') {
        return b.trending - a.trending;
      }
      return 0;
    });

    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = `
      <section class="section">
        <h2 class="section-title">Filtered Results</h2>
        <div class="wallpapers-grid" id="filteredGrid"></div>
      </section>
    `;

    this.renderWallpapers(sorted, 'filteredGrid');
  }

  toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.add('active');
  }

  closeMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('active');
  }

  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.transform = sidebar.style.transform === 'translateX(-100%)' 
      ? 'translateX(0)' 
      : 'translateX(-100%)';
  }

  setupOfflineMode() {
    if (!navigator.onLine) {
      document.getElementById('offlineStatus').classList.remove('hidden');
    }

    window.addEventListener('online', () => {
      document.getElementById('offlineStatus').classList.add('hidden');
      document.getElementById('syncStatus').textContent = 'Synced';
    });

    window.addEventListener('offline', () => {
      document.getElementById('offlineStatus').classList.remove('hidden');
      document.getElementById('syncStatus').textContent = 'Offline Mode';
    });
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new TechHub();
});
