// TradingSignal Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initInviteCode();
    initForms();
    initFAQ();
    initScrollAnimations();
    initChartAnimations();
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        }
    });
}

// Invite code functionality
function initInviteCode() {
    const inviteCodeInput = document.getElementById('inviteCode');
    const verifyBtn = document.getElementById('verifyCode');
    const inviteResult = document.getElementById('inviteResult');
    const applicationForm = document.getElementById('applicationForm');

    // Valid invite codes (in a real app, this would be server-side)
    const validCodes = ['KOL2024', 'TRADING50', 'SIGNAL2024', 'BONUS50', 'WELCOME'];

    if (verifyBtn && inviteCodeInput && inviteResult) {
        verifyBtn.addEventListener('click', function() {
            const code = inviteCodeInput.value.trim().toUpperCase();
            
            if (!code) {
                showInviteResult('请输入邀请码', 'error');
                return;
            }

            // Simulate API call
            setTimeout(() => {
                if (validCodes.includes(code)) {
                    showInviteResult('邀请码验证成功！正在为您开通专属优惠...', 'success');
                    inviteCodeInput.disabled = true;
                    verifyBtn.disabled = true;
                    
                    // Show application form after 2 seconds
                    setTimeout(() => {
                        if (applicationForm) {
                            applicationForm.classList.remove('hidden');
                            applicationForm.scrollIntoView({ behavior: 'smooth' });
                        }
                    }, 2000);
                } else {
                    showInviteResult('邀请码无效，请检查后重试', 'error');
                }
            }, 1000);
        });

        // Allow Enter key to submit
        inviteCodeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                verifyBtn.click();
            }
        });
    }
}

function showInviteResult(message, type) {
    const inviteResult = document.getElementById('inviteResult');
    if (inviteResult) {
        inviteResult.textContent = message;
        inviteResult.className = `invite-result ${type}`;
        inviteResult.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            inviteResult.style.display = 'none';
        }, 5000);
    }
}

// Form functionality
function initForms() {
    // Application form
    const userForm = document.getElementById('userForm');
    if (userForm) {
        userForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleApplicationForm();
        });
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactForm();
        });
    }
}

function handleApplicationForm() {
    const email = document.getElementById('userEmail').value;
    const username = document.getElementById('tradingViewUsername').value;
    const submitBtn = document.querySelector('#userForm .submit-btn');

    if (!email || !username) {
        showNotification('请填写所有必填字段', 'error');
        return;
    }

    // Disable submit button and show loading
    submitBtn.disabled = true;
    submitBtn.textContent = '提交中...';

    // Simulate API call
    setTimeout(() => {
        showNotification('申请提交成功！我们将在24小时内为您开通TradingView权限', 'success');
        
        // Reset form
        document.getElementById('userForm').reset();
        submitBtn.disabled = false;
        submitBtn.textContent = '提交申请';
        
        // Hide application form
        const applicationForm = document.getElementById('applicationForm');
        if (applicationForm) {
            applicationForm.classList.add('hidden');
        }
    }, 2000);
}

function handleContactForm() {
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;
    const submitBtn = document.querySelector('#contactForm .submit-btn');

    if (!name || !email || !message) {
        showNotification('请填写所有字段', 'error');
        return;
    }

    // Disable submit button and show loading
    submitBtn.disabled = true;
    submitBtn.textContent = '发送中...';

    // Simulate API call
    setTimeout(() => {
        showNotification('消息发送成功！我们会尽快回复您', 'success');
        
        // Reset form
        document.getElementById('contactForm').reset();
        submitBtn.disabled = false;
        submitBtn.textContent = '发送消息';
    }, 2000);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        max-width: 300px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
    }

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// FAQ functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                // Close other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .step, .stat-item, .faq-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Chart animations
function initChartAnimations() {
    // Animate candlesticks
    const candles = document.querySelectorAll('.candle');
    candles.forEach((candle, index) => {
        candle.style.opacity = '0';
        candle.style.transform = 'scaleY(0)';
        candle.style.transformOrigin = 'bottom';
        
        setTimeout(() => {
            candle.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            candle.style.opacity = '1';
            candle.style.transform = 'scaleY(1)';
        }, index * 200);
    });

    // Animate signal arrows
    const arrows = document.querySelectorAll('.signal-arrow');
    arrows.forEach((arrow, index) => {
        arrow.style.opacity = '0';
        arrow.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            arrow.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            arrow.style.opacity = '1';
            arrow.style.transform = 'translateY(0)';
        }, 1000 + index * 500);
    });

    // Animate price line
    const priceLine = document.querySelector('.price-line');
    if (priceLine) {
        priceLine.style.width = '0';
        setTimeout(() => {
            priceLine.style.transition = 'width 2s ease';
            priceLine.style.width = '100%';
        }, 1500);
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add loading states to buttons
function addLoadingState(button, originalText) {
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 处理中...';
    
    return function removeLoadingState() {
        button.disabled = false;
        button.innerHTML = originalText;
    };
}

// Initialize typing effect for hero title
function initTypingEffect() {
    const title = document.querySelector('.hero-title');
    if (!title) return;

    const text = title.textContent;
    title.textContent = '';
    title.style.borderRight = '2px solid #3b82f6';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                title.style.borderRight = 'none';
            }, 1000);
        }
    };
    
    setTimeout(typeWriter, 1000);
}

// Image modal functionality - Define globally
window.openImageModal = function(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    if (modal && modalImg) {
        modal.style.display = 'block';
        modalImg.src = imageSrc;
        
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }
}

window.closeImageModal = function() {
    const modal = document.getElementById('imageModal');
    
    if (modal) {
        modal.style.display = 'none';
        
        // Restore body scroll
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside the image
window.addEventListener('click', function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        window.closeImageModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        window.closeImageModal();
    }
});

// Scroll to subscribe function
window.scrollToSubscribe = function() {
    const subscribeSection = document.querySelector('.invite-section');
    if (subscribeSection) {
        subscribeSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });
    }
};

// Initialize on page load
window.addEventListener('load', function() {
    initTypingEffect();
});

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effects to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
