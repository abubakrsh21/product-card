export default class Modal {
    constructor(modalId, overlayId) {
        this.modal = document.getElementById(modalId);
        this.overlay = document.getElementById(overlayId);
        this.closeButton = this.modal.querySelector('.modal-close');
        
        this.init();
    }

    init() {
        if (this.closeButton) {
            this.closeButton.addEventListener('click', () => {
                this.close();
            });
        }

        if (this.overlay) {
            this.overlay.addEventListener('click', () => {
                this.close();
            })
        }
    }

    open() {
        this.modal.classList.add('modal-showed');
        this.overlay.classList.add('modal-showed');
    }

    close() {
        this.modal.classList.remove('modal-showed');
        this.overlay.classList.remove('modal-showed');
    }

    isOpen() {
        return this.modal.classList.contains('modal-showed');
    }
}