/* ==========================================================================
   ALTRAMAX QR STUDIO - APPLICATION CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // ==========================================================================
    // PRESET LOGO SVG DATA (CORS-Safe SVG Data URLs)
    // ==========================================================================
    const presetLogoSVGs = {
        facebook: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%231877f2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
        twitter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230f1419"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
        instagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23e1306c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
        youtube: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ff0000"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
        linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230a66c2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z"/></svg>`,
        github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23181717"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
        whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2325d366"><path d="M12.004 0C5.378 0 0 5.375 0 12.001c0 2.115.549 4.16 1.595 5.973L.082 23.98l6.143-1.613a11.96 11.96 0 0 0 5.779 1.488c6.626 0 12.004-5.379 12.004-12.004C24.008 5.375 18.63 0 12.004 0zm6.98 16.963c-.286.804-1.428 1.468-1.956 1.57-.468.09-1.077.16-3.141-.699-2.64-1.098-4.341-3.791-4.473-3.967-.132-.176-1.072-1.431-1.072-2.73 0-1.299.68-1.938.922-2.203.242-.264.528-.33.704-.33.176 0 .352.004.506.012.163.008.384-.062.599.458.22.532.748 1.826.814 1.958.066.132.11.286.022.463-.088.176-.132.286-.264.44-.132.154-.277.343-.396.462-.132.132-.27.275-.116.539.154.264.683 1.127 1.463 1.822.997.893 1.839 1.168 2.099 1.299.26.132.41.11.564-.066.154-.176.66-.77.836-1.034.176-.264.352-.22.594-.132.242.088 1.54.726 1.804.858.264.132.44.198.506.308.066.11.066.638-.22 1.442z"/></svg>`,
        wifi: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%238b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20" stroke-width="3"></line></svg>`,
        email: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23eab308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`
    };

    // ==========================================================================
    // APPLICATION STATE
    // ==========================================================================
    let currentTab = 'url';
    
    let activePresetLogo = null;
    let uploadedLogoData = null;
    let uploadedLogoName = '';
    
    let activeDesign = {
        body: 'square',
        frame: 'square',
        ball: 'square'
    };

    // ==========================================================================
    // ELEMENT SELECTORS
    // ==========================================================================
    const bodyElement = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle');
    const tabsContainer = document.getElementById('content-tabs');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    // Action Controls
    const btnGenerate = document.getElementById('btn-generate');
    const resolutionSlider = document.getElementById('resolution-slider');
    const resolutionVal = document.getElementById('resolution-val');
    const btnDownloadPng = document.getElementById('btn-download-png');
    const btnDownloadJpeg = document.getElementById('btn-download-jpeg');
    const btnDownloadSvg = document.getElementById('btn-download-svg');
    const previewStatus = document.getElementById('preview-status');
    const qrCanvasContainer = document.getElementById('qr-canvas-container');

    // Color Pickers & Hex text bounds
    const pickers = [
        { pickerId: 'color-body-solid', textId: 'color-body-solid-val' },
        { pickerId: 'color-gradient-start', textId: 'color-gradient-start-val' },
        { pickerId: 'color-gradient-end', textId: 'color-gradient-end-val' },
        { pickerId: 'color-bg', textId: 'color-bg-val' },
        { pickerId: 'color-eye-frame-solid', textId: 'color-eye-frame-solid-val' },
        { pickerId: 'color-frame-start', textId: 'color-frame-start-val' },
        { pickerId: 'color-frame-end', textId: 'color-frame-end-val' },
        { pickerId: 'color-eye-ball-solid', textId: 'color-eye-ball-solid-val' },
        { pickerId: 'color-ball-start', textId: 'color-ball-start-val' },
        { pickerId: 'color-ball-end', textId: 'color-ball-end-val' }
    ];

    // Accordion triggers
    const accordions = document.querySelectorAll('.accordion');

    // Logo Uploader elements
    const logoFileInput = document.getElementById('logo-file-input');
    const logoDropzone = document.getElementById('logo-dropzone');
    const logoUploadedPreview = document.getElementById('logo-uploaded-preview');
    const logoPreviewImg = document.getElementById('logo-preview-img');
    const logoFilename = document.getElementById('logo-filename');
    const btnRemoveUploadedLogo = document.getElementById('logo-remove-uploaded');
    const presetLogosContainer = document.getElementById('preset-logos-container');
    const btnRemovePresetLogo = document.getElementById('logo-remove-preset');
    const presetRemoveRow = document.getElementById('preset-remove-row');
    const logoClearBgCheckbox = document.getElementById('logo-clear-bg');
    const logoSizeSlider = document.getElementById('logo-size-slider');
    const logoSizeVal = document.getElementById('logo-size-val');

    // Design Shapes selectors
    const bodyShapeOptions = document.querySelectorAll('#design-body-grid .shape-option');
    const frameShapeOptions = document.querySelectorAll('#design-frame-grid .shape-option');
    const ballShapeOptions = document.querySelectorAll('#design-ball-grid .shape-option');

    // Template selections
    const templateCards = document.querySelectorAll('#templates-grid .template-card');

    // ==========================================================================
    // QR CODE INSTANTIATION
    // ==========================================================================
    const qrCode = new QRCodeStyling({
        width: 260,
        height: 260,
        data: "https://altramax.com",
        dotsOptions: {
            color: "#2563eb",
            type: "square"
        },
        backgroundOptions: {
            color: "#ffffff"
        },
        imageOptions: {
            crossOrigin: "anonymous",
            hideBackgroundDots: true,
            imageSize: 0.25,
            margin: 0
        }
    });
    
    // Render initially
    qrCode.append(qrCanvasContainer);

    // ==========================================================================
    // DARK MODE CONTROLLERS
    // ==========================================================================
    // Check local storage for preference, default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        bodyElement.classList.remove('dark');
        themeToggleBtn.innerHTML = '<i data-lucide="sun"></i>';
    } else {
        bodyElement.classList.add('dark');
        themeToggleBtn.innerHTML = '<i data-lucide="moon"></i>';
    }
    lucide.createIcons();

    themeToggleBtn.addEventListener('click', () => {
        const isDark = bodyElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggleBtn.innerHTML = isDark ? '<i data-lucide="moon"></i>' : '<i data-lucide="sun"></i>';
        lucide.createIcons();
        
        // If colors match default themes, update them
        updateQR();
    });

    // ==========================================================================
    // ACCORDIONS SYSTEM
    // ==========================================================================
    accordions.forEach(acc => {
        const trigger = acc.querySelector('.accordion-trigger');
        trigger.addEventListener('click', () => {
            const isActive = acc.classList.contains('active');
            acc.classList.toggle('active');
            trigger.setAttribute('aria-expanded', !isActive);
        });
    });

    // ==========================================================================
    // DUAL-BIND COLOR PICKERS & TEXT FIELDS
    // ==========================================================================
    pickers.forEach(({ pickerId, textId }) => {
        const picker = document.getElementById(pickerId);
        const text = document.getElementById(textId);

        if (picker && text) {
            // Update text when picker changes
            picker.addEventListener('input', (e) => {
                text.value = e.target.value.toUpperCase();
                clearThemeActiveState();
                updateQR();
            });

            // Update picker when text changes (must be valid hex)
            text.addEventListener('input', (e) => {
                const val = e.target.value;
                if (/^#[0-9A-F]{6}$/i.test(val)) {
                    picker.value = val;
                    clearThemeActiveState();
                    updateQR();
                }
            });
        }
    });

    // ==========================================================================
    // COLOR SUB-SECTION INTERACTIVE SWITCHES
    // ==========================================================================
    // Body color type (Single vs Gradient)
    const bodyColorRadios = document.querySelectorAll('input[name="body-color-type"]');
    const singleBodyRow = document.getElementById('single-body-picker-row');
    const gradientBodyPanel = document.getElementById('gradient-body-panel');

    bodyColorRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'gradient') {
                singleBodyRow.classList.add('hidden');
                gradientBodyPanel.classList.remove('hidden');
            } else {
                singleBodyRow.classList.remove('hidden');
                gradientBodyPanel.classList.add('hidden');
            }
            clearThemeActiveState();
            updateQR();
        });
    });

    // Gradient properties
    const gradientShapeSelect = document.getElementById('gradient-shape-type');
    const gradientAngleContainer = document.getElementById('gradient-angle-container');
    const gradientAngleSlider = document.getElementById('gradient-angle');
    const gradientAngleVal = document.getElementById('gradient-angle-val');

    gradientShapeSelect.addEventListener('change', (e) => {
        if (e.target.value === 'radial') {
            gradientAngleContainer.classList.add('hidden');
        } else {
            gradientAngleContainer.classList.remove('hidden');
        }
        clearThemeActiveState();
        updateQR();
    });

    gradientAngleSlider.addEventListener('input', (e) => {
        gradientAngleVal.textContent = `${e.target.value}°`;
        clearThemeActiveState();
        updateQR();
    });

    // Transparent Background
    const bgTransparentCheckbox = document.getElementById('color-bg-transparent');
    const bgColorInputContainer = document.querySelector('#color-bg').closest('.picker-container');

    bgTransparentCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            bgColorInputContainer.style.opacity = '0.4';
            bgColorInputContainer.style.pointerEvents = 'none';
        } else {
            bgColorInputContainer.style.opacity = '1';
            bgColorInputContainer.style.pointerEvents = 'auto';
        }
        clearThemeActiveState();
        updateQR();
    });

    // Custom Eye Colors master toggle
    const customEyeCheckbox = document.getElementById('custom-eye-colors');
    const eyeColorsPanel = document.getElementById('eye-colors-panel');

    customEyeCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            eyeColorsPanel.classList.remove('hidden');
        } else {
            eyeColorsPanel.classList.add('hidden');
        }
        clearThemeActiveState();
        updateQR();
    });

    // Eye Frame & Eye Ball Sub-Gradient Toggles
    setupSubColorToggles('eye-frame', 'single-eye-frame-row', 'gradient-eye-frame-panel');
    setupSubColorToggles('eye-ball', 'single-eye-ball-row', 'gradient-eye-ball-panel');

    function setupSubColorToggles(radioName, singleRowId, gradientPanelId) {
        const radios = document.querySelectorAll(`input[name="${radioName}-color-type"]`);
        const singleRow = document.getElementById(singleRowId);
        const gradientPanel = document.getElementById(gradientPanelId);

        radios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                if (e.target.value === 'gradient') {
                    singleRow.classList.add('hidden');
                    gradientPanel.classList.remove('hidden');
                } else {
                    singleRow.classList.remove('hidden');
                    gradientPanel.classList.add('hidden');
                }
                clearThemeActiveState();
                updateQR();
            });
        });
    }

    // ==========================================================================
    // LOGO IMAGE CONTROLLERS & UPLOADER
    // ==========================================================================
    // Logo Drag and Drop handlers
    logoDropzone.addEventListener('click', (e) => {
        if (e.target.closest('#logo-remove-uploaded')) return;
        logoFileInput.click();
    });

    logoDropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        logoDropzone.classList.add('dragover');
    });

    logoDropzone.addEventListener('dragleave', () => {
        logoDropzone.classList.remove('dragover');
    });

    logoDropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        logoDropzone.classList.remove('dragover');
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            parseLogoFile(e.dataTransfer.files[0]);
        }
    });

    logoFileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) {
            parseLogoFile(e.target.files[0]);
        }
    });

    function parseLogoFile(file) {
        if (!file.type.startsWith('image/')) {
            alert('Unsupported file format. Please upload a valid image (PNG, JPG, or SVG).');
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            uploadedLogoData = event.target.result;
            uploadedLogoName = file.name;
            activePresetLogo = null;

            // Update UI preview
            logoDropzone.querySelector('.dropzone-prompt').classList.add('hidden');
            logoUploadedPreview.classList.remove('hidden');
            logoPreviewImg.src = uploadedLogoData;
            logoFilename.textContent = file.name;

            // Disable template logo buttons visual active states
            clearPresetLogoActiveState();

            updateQR();
        };
        reader.readAsDataURL(file);
    }

    btnRemoveUploadedLogo.addEventListener('click', (e) => {
        e.stopPropagation();
        uploadedLogoData = null;
        uploadedLogoName = '';
        logoFileInput.value = '';

        // Reset dropzone markup
        logoUploadedPreview.classList.add('hidden');
        logoDropzone.querySelector('.dropzone-prompt').classList.remove('hidden');

        updateQR();
    });

    // Preset Logo selection
    const presetLogoBtns = document.querySelectorAll('.preset-logo-btn');
    presetLogoBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const logoKey = btn.getAttribute('data-logo');
            activePresetLogo = logoKey;
            
            // Clear any uploaded custom logo
            uploadedLogoData = null;
            uploadedLogoName = '';
            logoFileInput.value = '';
            logoUploadedPreview.classList.add('hidden');
            logoDropzone.querySelector('.dropzone-prompt').classList.remove('hidden');

            // Set active class
            clearPresetLogoActiveState();
            btn.classList.add('active');
            presetRemoveRow.classList.remove('hidden');

            updateQR();
        });
    });

    btnRemovePresetLogo.addEventListener('click', () => {
        activePresetLogo = null;
        clearPresetLogoActiveState();
        updateQR();
    });

    function clearPresetLogoActiveState() {
        presetLogoBtns.forEach(btn => btn.classList.remove('active'));
        presetRemoveRow.classList.add('hidden');
    }

    // Logo settings controls
    logoClearBgCheckbox.addEventListener('change', () => updateQR());
    logoSizeSlider.addEventListener('input', (e) => {
        logoSizeVal.textContent = `${e.target.value}%`;
        updateQR();
    });

    // ==========================================================================
    // DESIGN SHAPES GRID SELECTION
    // ==========================================================================
    bindShapeGrid(bodyShapeOptions, 'body');
    bindShapeGrid(frameShapeOptions, 'frame');
    bindShapeGrid(ballShapeOptions, 'ball');

    function bindShapeGrid(options, targetKey) {
        options.forEach(opt => {
            opt.addEventListener('click', () => {
                options.forEach(o => o.classList.remove('active'));
                opt.classList.add('active');
                activeDesign[targetKey] = opt.getAttribute('data-shape');
                clearThemeActiveState();
                updateQR();
            });
        });
    }

    // ==========================================================================
    // PRESET THEMES / TEMPLATES MANAGEMENT
    // ==========================================================================
    templateCards.forEach(card => {
        card.addEventListener('click', () => {
            const templateKey = card.getAttribute('data-template');
            applyTemplatePreset(templateKey);

            templateCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });

    function clearThemeActiveState() {
        templateCards.forEach(c => c.classList.remove('active'));
    }

    function applyTemplatePreset(key) {
        // Class helper to trigger visual updates inside pickers
        const updateColorField = (pickerId, valId, value) => {
            const picker = document.getElementById(pickerId);
            const val = document.getElementById(valId);
            if (picker && val) {
                picker.value = value;
                val.value = value.toUpperCase();
            }
        };

        const setCheckbox = (id, checked) => {
            const cb = document.getElementById(id);
            if (cb) {
                cb.checked = checked;
                cb.dispatchEvent(new Event('change'));
            }
        };

        const setRadio = (name, value) => {
            const radio = document.querySelector(`input[name="${name}"][value="${value}"]`);
            if (radio) {
                radio.checked = true;
                radio.dispatchEvent(new Event('change'));
            }
        };

        const setSelect = (id, value) => {
            const select = document.getElementById(id);
            if (select) {
                select.value = value;
                select.dispatchEvent(new Event('change'));
            }
        };

        const selectShapeOption = (gridId, shape) => {
            const options = document.querySelectorAll(`${gridId} .shape-option`);
            options.forEach(opt => {
                if (opt.getAttribute('data-shape') === shape) {
                    opt.classList.add('active');
                } else {
                    opt.classList.remove('active');
                }
            });
        };

        switch (key) {
            case 'default':
                // Reset to Classic Black
                setRadio('body-color-type', 'single');
                updateColorField('color-body-solid', 'color-body-solid-val', '#000000');
                
                setCheckbox('color-bg-transparent', false);
                updateColorField('color-bg', 'color-bg-val', '#ffffff');
                
                setCheckbox('custom-eye-colors', false);
                
                activeDesign = { body: 'square', frame: 'square', ball: 'square' };
                selectShapeOption('#design-body-grid', 'square');
                selectShapeOption('#design-frame-grid', 'square');
                selectShapeOption('#design-ball-grid', 'square');
                break;

            case 'ocean-breeze':
                setRadio('body-color-type', 'gradient');
                updateColorField('color-gradient-start', 'color-gradient-start-val', '#1e3a8a');
                updateColorField('color-gradient-end', 'color-gradient-end-val', '#3b82f6');
                setSelect('gradient-shape-type', 'linear');
                
                gradientAngleSlider.value = 45;
                gradientAngleVal.textContent = '45°';
                
                setCheckbox('color-bg-transparent', false);
                updateColorField('color-bg', 'color-bg-val', '#ffffff');
                
                setCheckbox('custom-eye-colors', true);
                setRadio('eye-frame-color-type', 'single');
                updateColorField('color-eye-frame-solid', 'color-eye-frame-solid-val', '#1e3a8a');
                setRadio('eye-ball-color-type', 'single');
                updateColorField('color-eye-ball-solid', 'color-eye-ball-solid-val', '#3b82f6');
                
                activeDesign = { body: 'rounded', frame: 'rounded', ball: 'rounded' };
                selectShapeOption('#design-body-grid', 'rounded');
                selectShapeOption('#design-frame-grid', 'rounded');
                selectShapeOption('#design-ball-grid', 'rounded');
                break;

            case 'neon-cyber':
                setRadio('body-color-type', 'gradient');
                updateColorField('color-gradient-start', 'color-gradient-start-val', '#a855f7');
                updateColorField('color-gradient-end', 'color-gradient-end-val', '#1e1b4b');
                setSelect('gradient-shape-type', 'radial');
                
                setCheckbox('color-bg-transparent', false);
                updateColorField('color-bg', 'color-bg-val', '#ffffff');
                
                setCheckbox('custom-eye-colors', true);
                setRadio('eye-frame-color-type', 'gradient');
                updateColorField('color-frame-start', 'color-frame-start-val', '#a855f7');
                updateColorField('color-frame-end', 'color-frame-end-val', '#6366f1');
                setRadio('eye-ball-color-type', 'single');
                updateColorField('color-eye-ball-solid', 'color-eye-ball-solid-val', '#a855f7');
                
                activeDesign = { body: 'classy', frame: 'classy-rounded', ball: 'classy' };
                selectShapeOption('#design-body-grid', 'classy');
                selectShapeOption('#design-frame-grid', 'classy-rounded');
                selectShapeOption('#design-ball-grid', 'classy');
                break;

            case 'emerald-garden':
                setRadio('body-color-type', 'gradient');
                updateColorField('color-gradient-start', 'color-gradient-start-val', '#064e3b');
                updateColorField('color-gradient-end', 'color-gradient-end-val', '#10b981');
                setSelect('gradient-shape-type', 'linear');
                
                gradientAngleSlider.value = 135;
                gradientAngleVal.textContent = '135°';
                
                setCheckbox('color-bg-transparent', false);
                updateColorField('color-bg', 'color-bg-val', '#ffffff');
                
                setCheckbox('custom-eye-colors', true);
                setRadio('eye-frame-color-type', 'single');
                updateColorField('color-eye-frame-solid', 'color-eye-frame-solid-val', '#064e3b');
                setRadio('eye-ball-color-type', 'single');
                updateColorField('color-eye-ball-solid', 'color-eye-ball-solid-val', '#10b981');
                
                activeDesign = { body: 'dots', frame: 'dot', ball: 'dot' };
                selectShapeOption('#design-body-grid', 'dots');
                selectShapeOption('#design-frame-grid', 'dot');
                selectShapeOption('#design-ball-grid', 'dot');
                break;

            case 'sunset-glow':
                setRadio('body-color-type', 'gradient');
                updateColorField('color-gradient-start', 'color-gradient-start-val', '#ea580c');
                updateColorField('color-gradient-end', 'color-gradient-end-val', '#f43f5e');
                setSelect('gradient-shape-type', 'linear');
                
                gradientAngleSlider.value = 90;
                gradientAngleVal.textContent = '90°';
                
                setCheckbox('color-bg-transparent', false);
                updateColorField('color-bg', 'color-bg-val', '#ffffff');
                
                setCheckbox('custom-eye-colors', true);
                setRadio('eye-frame-color-type', 'single');
                updateColorField('color-eye-frame-solid', 'color-eye-frame-solid-val', '#ea580c');
                setRadio('eye-ball-color-type', 'single');
                updateColorField('color-eye-ball-solid', 'color-eye-ball-solid-val', '#f43f5e');
                
                activeDesign = { body: 'extra-rounded', frame: 'extra-rounded', ball: 'extra-rounded' };
                selectShapeOption('#design-body-grid', 'extra-rounded');
                selectShapeOption('#design-frame-grid', 'extra-rounded');
                selectShapeOption('#design-ball-grid', 'extra-rounded');
                break;
        }

        updateQR();
    }

    // ==========================================================================
    // TABS CONTENT SYSTEM
    // ==========================================================================
    tabsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.tab-btn');
        if (!btn) return;

        const tabKey = btn.getAttribute('data-tab');
        currentTab = tabKey;

        // Toggle button states
        tabsContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Toggle panel displays
        tabPanels.forEach(panel => {
            if (panel.id === `panel-${tabKey}`) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });

        updateQR();
    });

    // Re-render QR Code when inputs change inside current panel (debounced)
    tabPanels.forEach(panel => {
        panel.addEventListener('input', () => updateQR());
        panel.addEventListener('change', () => updateQR());
    });

    // ==========================================================================
    // STRING PARSERS FOR DATA TYPES
    // ==========================================================================
    function parseQRCodeContent() {
        const getVal = (id) => document.getElementById(id)?.value?.trim() || '';
        const getChecked = (id) => document.getElementById(id)?.checked || false;

        switch (currentTab) {
            case 'url':
                return getVal('input-url') || 'https://altramax.com';

            case 'text':
                return getVal('input-text') || 'Altramax QR Studio';

            case 'email':
                const to = getVal('input-email-to');
                const subject = getVal('input-email-subject');
                const body = getVal('input-email-body');
                if (!to) return '';
                return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            case 'phone':
                const phone = getVal('input-phone');
                if (!phone) return '';
                return `tel:${phone}`;

            case 'sms':
                const smsPhone = getVal('input-sms-phone');
                const smsMsg = getVal('input-sms-message');
                if (!smsPhone) return '';
                return `SMSTO:${smsPhone}:${smsMsg}`;

            case 'wifi':
                const ssid = getVal('input-wifi-ssid');
                const encryption = getVal('input-wifi-encryption');
                const password = getVal('input-wifi-password');
                const hidden = getChecked('input-wifi-hidden');
                if (!ssid) return '';
                return `WIFI:S:${ssid};T:${encryption};P:${password};H:${hidden ? 'true' : 'false'};;`;

            case 'vcard':
                const first = getVal('input-vcard-first');
                const last = getVal('input-vcard-last');
                const org = getVal('input-vcard-org');
                const title = getVal('input-vcard-title');
                const wPhone = getVal('input-vcard-phone');
                const mPhone = getVal('input-vcard-mobile');
                const email = getVal('input-vcard-email');
                const web = getVal('input-vcard-url');
                const street = getVal('input-vcard-street');
                const city = getVal('input-vcard-city');
                const state = getVal('input-vcard-state');
                const zip = getVal('input-vcard-zip');
                const country = getVal('input-vcard-country');

                if (!first && !last) return '';

                return [
                    'BEGIN:VCARD',
                    'VERSION:3.0',
                    `N:${last};${first};;;`,
                    `FN:${first} ${last}`,
                    org ? `ORG:${org}` : '',
                    title ? `TITLE:${title}` : '',
                    wPhone ? `TEL;TYPE=WORK,VOICE:${wPhone}` : '',
                    mPhone ? `TEL;TYPE=CELL,VOICE:${mPhone}` : '',
                    email ? `EMAIL;TYPE=PREF,INTERNET:${email}` : '',
                    web ? `URL:${web}` : '',
                    (street || city || state || zip || country) ? `ADR;TYPE=WORK:;;${street};${city};${state};${zip};${country}` : '',
                    'END:VCARD'
                ].filter(line => line !== '').join('\n');

            case 'mecard':
                const meName = getVal('input-mecard-name');
                const mePhone = getVal('input-mecard-phone');
                const meEmail = getVal('input-mecard-email');
                const meUrl = getVal('input-mecard-url');
                const meAddress = getVal('input-mecard-address');

                if (!meName) return '';

                return `MECARD:N:${meName};` + 
                       (mePhone ? `TEL:${mePhone};` : '') +
                       (meEmail ? `EMAIL:${meEmail};` : '') +
                       (meUrl ? `URL:${meUrl};` : '') +
                       (meAddress ? `ADR:${meAddress};` : '') + ';';

            case 'location':
                const lat = getVal('input-location-lat');
                const lng = getVal('input-location-lng');
                if (!lat || !lng) return '';
                // Standard coordinates maps URL for absolute web compatibility
                return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

            case 'event':
                const eTitle = getVal('input-event-title');
                const eStart = getVal('input-event-start');
                const eEnd = getVal('input-event-end');
                const eLoc = getVal('input-event-location');
                const eDesc = getVal('input-event-desc');

                if (!eTitle) return '';

                const formatICalDate = (dateTimeStr) => {
                    if (!dateTimeStr) return '';
                    return dateTimeStr.replace(/[-:]/g, '') + '00';
                };

                return [
                    'BEGIN:VCALENDAR',
                    'VERSION:2.0',
                    'BEGIN:VEVENT',
                    `SUMMARY:${eTitle}`,
                    eDesc ? `DESCRIPTION:${eDesc}` : '',
                    eLoc ? `LOCATION:${eLoc}` : '',
                    eStart ? `DTSTART:${formatICalDate(eStart)}` : '',
                    eEnd ? `DTEND:${formatICalDate(eEnd)}` : '',
                    'END:VEVENT',
                    'END:VCALENDAR'
                ].filter(line => line !== '').join('\n');

            case 'crypto':
                const coin = getVal('input-crypto-coin');
                const amount = getVal('input-crypto-amount');
                const addr = getVal('input-crypto-address');
                const msg = getVal('input-crypto-message');

                if (!addr) return '';

                let cryptoUri = `${coin}:${addr}`;
                const params = [];
                if (amount) params.push(`${coin === 'ethereum' ? 'value' : 'amount'}=${amount}`);
                if (msg) params.push(`message=${encodeURIComponent(msg)}`);

                if (params.length > 0) {
                    cryptoUri += `?${params.join('&')}`;
                }
                return cryptoUri;

            default:
                return 'https://altramax.com';
        }
    }

    // ==========================================================================
    // QR CODE DRAW UPDATE ENGINE
    // ==========================================================================
    let qrDebounceTimeout = null;

    function updateQR() {
        if (qrDebounceTimeout) clearTimeout(qrDebounceTimeout);
        
        previewStatus.textContent = 'Updating...';
        previewStatus.style.backgroundColor = 'var(--warning)';

        qrDebounceTimeout = setTimeout(() => {
            drawQRCode();
        }, 250);
    }

    // Manually trigger immediate regeneration
    btnGenerate.addEventListener('click', () => {
        if (qrDebounceTimeout) clearTimeout(qrDebounceTimeout);
        drawQRCode();
    });

    function drawQRCode() {
        const contentStr = parseQRCodeContent();

        // If content is empty (e.g. invalid forms), fallback to placeholder
        if (!contentStr) {
            previewStatus.textContent = 'Empty';
            previewStatus.style.backgroundColor = 'var(--danger)';
            return;
        }

        const options = {
            data: contentStr,
            dotsOptions: {
                type: activeDesign.body
            },
            cornersSquareOptions: {
                type: activeDesign.frame
            },
            cornersDotOptions: {
                type: activeDesign.ball
            },
            backgroundOptions: {},
            imageOptions: {
                hideBackgroundDots: logoClearBgCheckbox.checked,
                imageSize: parseFloat(logoSizeSlider.value) / 100,
                margin: 0
            }
        };

        // --- Handle Body Pixel Color / Gradient ---
        const bColorType = document.querySelector('input[name="body-color-type"]:checked')?.value || 'single';
        if (bColorType === 'gradient') {
            const startC = document.getElementById('color-gradient-start').value;
            const endC = document.getElementById('color-gradient-end').value;
            const gType = document.getElementById('gradient-shape-type').value;
            const rotationDeg = parseInt(document.getElementById('gradient-angle').value, 10);
            
            options.dotsOptions.gradient = {
                type: gType,
                rotation: rotationDeg * (Math.PI / 180),
                colorStops: [
                    { offset: 0, color: startC },
                    { offset: 1, color: endC }
                ]
            };
            options.dotsOptions.color = undefined;
        } else {
            options.dotsOptions.color = document.getElementById('color-body-solid').value;
            options.dotsOptions.gradient = undefined;
        }

        // --- Handle Background Color / Transparency ---
        if (bgTransparentCheckbox.checked) {
            options.backgroundOptions.color = 'transparent';
        } else {
            options.backgroundOptions.color = document.getElementById('color-bg').value;
        }

        // --- Handle Custom Corners Frame Color ---
        const isCustomEyeColors = customEyeCheckbox.checked;
        if (isCustomEyeColors) {
            const fColorType = document.querySelector('input[name="eye-frame-color-type"]:checked')?.value || 'single';
            if (fColorType === 'gradient') {
                const startC = document.getElementById('color-frame-start').value;
                const endC = document.getElementById('color-frame-end').value;
                options.cornersSquareOptions.gradient = {
                    type: 'linear',
                    rotation: 0,
                    colorStops: [
                        { offset: 0, color: startC },
                        { offset: 1, color: endC }
                    ]
                };
                options.cornersSquareOptions.color = undefined;
            } else {
                options.cornersSquareOptions.color = document.getElementById('color-eye-frame-solid').value;
                options.cornersSquareOptions.gradient = undefined;
            }

            // --- Handle Custom Corners Ball Color ---
            const bColorTypeEye = document.querySelector('input[name="eye-ball-color-type"]:checked')?.value || 'single';
            if (bColorTypeEye === 'gradient') {
                const startC = document.getElementById('color-ball-start').value;
                const endC = document.getElementById('color-ball-end').value;
                options.cornersDotOptions.gradient = {
                    type: 'linear',
                    rotation: 0,
                    colorStops: [
                        { offset: 0, color: startC },
                        { offset: 1, color: endC }
                    ]
                };
                options.cornersDotOptions.color = undefined;
            } else {
                options.cornersDotOptions.color = document.getElementById('color-eye-ball-solid').value;
                options.cornersDotOptions.gradient = undefined;
            }
        } else {
            // Fallback clear
            options.cornersSquareOptions.color = undefined;
            options.cornersSquareOptions.gradient = undefined;
            options.cornersDotOptions.color = undefined;
            options.cornersDotOptions.gradient = undefined;
        }

        // --- Handle Logo Image Rendering ---
        if (uploadedLogoData) {
            options.image = uploadedLogoData;
        } else if (activePresetLogo) {
            const rawSvg = presetLogoSVGs[activePresetLogo];
            // Encode as SVG Data URL
            options.image = `data:image/svg+xml;utf8,${encodeURIComponent(rawSvg)}`;
        } else {
            options.image = '';
        }

        // Apply options
        qrCode.update(options);

        // Reset badge status
        previewStatus.textContent = 'Ready';
        previewStatus.style.backgroundColor = 'var(--success)';
    }

    // ==========================================================================
    // DOWNLOAD ENGINE (RESOLUTION TRANSITIONS)
    // ==========================================================================
    // Resolution slider display text update
    resolutionSlider.addEventListener('input', (e) => {
        resolutionVal.textContent = `${e.target.value} x ${e.target.value} px`;
    });

    btnDownloadPng.addEventListener('click', () => triggerExport('png'));
    btnDownloadJpeg.addEventListener('click', () => triggerExport('jpeg'));
    btnDownloadSvg.addEventListener('click', () => triggerExport('svg'));

    function triggerExport(ext) {
        const downloadSize = parseInt(resolutionSlider.value, 10);
        
        previewStatus.textContent = 'Exporting...';
        previewStatus.style.backgroundColor = 'var(--warning)';

        // 1. Store on-screen display values
        const originalWidth = qrCode._options.width;
        const originalHeight = qrCode._options.height;

        // 2. Temporarily switch canvas dimensions to user's desired export resolution
        qrCode.update({
            width: downloadSize,
            height: downloadSize
        });

        // 3. Wait briefly for canvas update, download, then restore original screen dimensions
        setTimeout(() => {
            qrCode.download({
                name: `altramax-qr-code-${Date.now()}`,
                extension: ext
            }).then(() => {
                restoreDimensions();
            }).catch(() => {
                // Promise fallback safety
                setTimeout(restoreDimensions, 600);
            });
        }, 150);

        function restoreDimensions() {
            qrCode.update({
                width: originalWidth,
                height: originalHeight
            });
            previewStatus.textContent = 'Ready';
            previewStatus.style.backgroundColor = 'var(--success)';
        }
    }
});
