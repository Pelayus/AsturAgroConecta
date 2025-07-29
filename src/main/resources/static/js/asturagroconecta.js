/**
 * AsturAgroConecta - JavaScript Principal
 * Funcionalidades de interacción para la página de inicio
 */

// ===================================
// VARIABLES GLOBALES
// ===================================
const menuToggle = document.querySelector('.header__menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');
const navLinks = document.querySelectorAll('.nav__link');

// ===================================
// FUNCIONES PRINCIPALES
// ===================================

/**
 * Inicializa todas las funcionalidades cuando el DOM está cargado
 */
function initializeApp() {
    setupMobileMenu();
    setupSmoothScrolling();
    setupActiveNavigation();
    setupButtonInteractions();
    
    // Añadir animación de entrada
    document.body.classList.add('fade-in');
    
    console.log('AsturAgroConecta inicializado correctamente');
}

/**
 * Configura el menú móvil hamburguesa
 */
function setupMobileMenu() {
    if (!menuToggle || !mobileMenu) return;
    
    // Toggle del menú móvil
    menuToggle.addEventListener('click', toggleMobileMenu);
    
    // Cerrar menú al hacer click en un enlace
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Cerrar menú al hacer click fuera de él
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header')) {
            closeMobileMenu();
        }
    });
    
    // Cerrar menú con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
}

/**
 * Alterna la visibilidad del menú móvil
 */
function toggleMobileMenu() {
    const isActive = mobileMenu.classList.contains('active');
    
    if (isActive) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

/**
 * Abre el menú móvil
 */
function openMobileMenu() {
    mobileMenu.classList.add('active');
    menuToggle.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevenir scroll
    
    // Accesibilidad
    menuToggle.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
}

/**
 * Cierra el menú móvil
 */
function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll
    
    // Accesibilidad
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
}

/**
 * Configura el scroll suave para los enlaces de navegación
 */
function setupSmoothScrolling() {
    const allNavLinks = [...navLinks, ...mobileMenuLinks];
    
    allNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Solo aplicar scroll suave a enlaces internos
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Actualizar navegación activa
                    updateActiveNavigation(targetId);
                }
            }
        });
    });
}

/**
 * Configura la navegación activa basada en el scroll
 */
function setupActiveNavigation() {
    // Observador de intersección para detectar secciones visibles
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateActiveNavigation(entry.target.id);
            }
        });
    }, observerOptions);
    
    // Observar todas las secciones
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));
}

/**
 * Actualiza el enlace de navegación activo
 */
function updateActiveNavigation(activeId) {
    // Remover clase activa de todos los enlaces
    const allNavLinks = [...navLinks, ...mobileMenuLinks];
    allNavLinks.forEach(link => {
        link.classList.remove('nav__link--active');
    });
    
    // Añadir clase activa al enlace correspondiente
    const activeLinks = document.querySelectorAll(`[href="#${activeId}"]`);
    activeLinks.forEach(link => {
        if (link.classList.contains('nav__link') || link.classList.contains('mobile-menu__link')) {
            link.classList.add('nav__link--active');
        }
    });
}

/**
 * Configura las interacciones de los botones
 */
function setupButtonInteractions() {
    // Botón CTA principal
    const ctaButton = document.querySelector('.hero__cta');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Simular navegación a productores
            console.log('Navegando a la sección de productores...');
            
            // En una aplicación real, aquí iría la lógica de navegación
            // Por ahora, mostrar un mensaje
            showNotification('¡Próximamente! Sección de productores en desarrollo.');
        });
    }
    
    // Botones de autenticación
    const loginButtons = document.querySelectorAll('button:contains("Iniciar sesión")');
    const registerButtons = document.querySelectorAll('button:contains("Registrarse")');
    
    // Usar querySelectorAll con texto personalizado
    document.querySelectorAll('button').forEach(button => {
        if (button.textContent.includes('Iniciar sesión')) {
            button.addEventListener('click', () => {
                showNotification('Funcionalidad de inicio de sesión próximamente.');
            });
        }
        
        if (button.textContent.includes('Registrarse')) {
            button.addEventListener('click', () => {
                showNotification('Funcionalidad de registro próximamente.');
            });
        }
    });
}

/**
 * Muestra una notificación temporal
 */
function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Estilos inline para la notificación
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-white)',
        padding: '1rem 1.5rem',
        borderRadius: 'var(--border-radius)',
        boxShadow: 'var(--shadow-lg)',
        zIndex: '9999',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px',
        fontSize: '0.9rem'
    });
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

/**
 * Maneja el redimensionamiento de la ventana
 */
function handleResize() {
    // Cerrar menú móvil si se cambia a desktop
    if (window.innerWidth >= 1024) {
        closeMobileMenu();
    }
}

// ===================================
// EVENT LISTENERS GLOBALES
// ===================================

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Manejar redimensionamiento de ventana
window.addEventListener('resize', handleResize);

// Prevenir comportamiento por defecto en enlaces vacíos
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
        e.preventDefault();
    }
});

// ===================================
// UTILIDADES ADICIONALES
// ===================================

/**
 * Función de utilidad para detectar dispositivos móviles
 */
function isMobileDevice() {
    return window.innerWidth < 768;
}

/**
 * Función de utilidad para detectar si el usuario prefiere movimiento reducido
 */
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Exportar funciones para uso externo si es necesario
window.AsturAgroConecta = {
    toggleMobileMenu,
    showNotification,
    isMobileDevice,
    prefersReducedMotion
};