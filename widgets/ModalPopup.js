class ModalPopup {
  constructor(
    {
      modalBody,
      modalHeader = "",
      modalFooter = "",
      btnOpenModalId = "btnModal",
    } = {},
    {
      modalHeaderBgColor = "",
      modalBodyBgColor = "",
      modalFooterBgColor = "",
      modalWidth = "80%",
      modalTop = "5%",
    } = {}
  ) {
    this.modalHeader = modalHeader;
    this.modalBody = modalBody;
    this.modalFooter = modalFooter;
    this.btnOpenModalId = btnOpenModalId;
    this.initialise();
    this.modalStylesOverride = {
      modalHeaderBgColor: modalHeaderBgColor,
      modalBodyBgColor: modalBodyBgColor,
      modalFooterBgColor: modalFooterBgColor,
      modalWidth:modalWidth,
      modalTop: modalTop,
    };
    this.createStyles();
  }

  initialise = () => {
    this.container = document.createElement("div");
    this.container.style.display = "none";

    document.body.appendChild(this.container);
    this.container.innerHTML = `
            <div id="dvModal" class="modal">
                <div class="modal-Content">
                    <div class="modal-header" style="position:relative;padding:20px;">
                        <span class="closeBtn" style="position:absolute; right:15px;top:8px; font-size:25px;">&times;</span>
                        ${
                          this.modalHeader && this.modalHeader.length > 0
                            ? `${this.modalHeader}`
                            : ""
                        }
                    </div>
                    <div class="modal-body">
                        ${
                          this.modalBody && this.modalBody.length > 0
                            ? `${this.modalBody}`
                            : ""
                        }    
                    </div>
                    <div class="modal-footer">
                        ${
                          this.modalFooter && this.modalFooter.length > 0
                            ? `${this.modalFooter}`
                            : ""
                        } 
                    </div>
                </div>
            </div>
        `;

    const btnClick = document.getElementById(this.btnOpenModalId);
    btnClick.addEventListener("click", (evt) => {
      this.showModal(evt);
    });

    const btnClose = document.getElementsByClassName("closeBtn")[0];
    btnClose.addEventListener("click", this.closeModal);

    
  };

  showModal = (evt) => {
      this.container.style.display = "block";
  };

  closeModal = () => {
    this.container.style.display = "none";
  };

  createStyles = () => {
    const styleTag = document.createElement("style");
    document.head.appendChild(styleTag);

    styleTag.innerHTML = `
        .modal{
            // display: none;
            position: fixed;
            z-index: 1;
            left: 0;
            top:0;
            height: 100%;
            width: 100%; overflow: auto;
            background-color: rgba(0,0,0,0.3);
            animation: onModalOpen;
            animation-duration: 1.0s;
        }

        .modal-Content{
            background-color: #f4f4f4;
            margin:10% auto;
            margin-top: ${this.modalStylesOverride.modalTop};
            width: ${this.modalStylesOverride.modalWidth};
            box-shadow: 0 5px 8px 0 rgba(0,0,0,0.3),0 7px 20px 0 rgba(0,0,0,0.5);
        }
        .modal-header h3, .modal-footer h4{
            margin: 0px;
        }
        .modal-header{
            background: ${
              this.modalStylesOverride.modalHeaderBgColor &&
              this.modalStylesOverride.modalHeaderBgColor.length > 2
                ? this.modalStylesOverride.modalHeaderBgColor
                : "coral"
            };
            padding:15px;
            color:#fff;
        }
        .modal-body{
            padding:15px;
            background: ${
              this.modalStylesOverride.modalBodyBgColor &&
              this.modalStylesOverride.modalBodyBgColor.length > 2
                ? this.modalStylesOverride.modalBodyBgColor
                : "#fff"
            };
            color:#000;
        }
        .modal-footer{
            background: ${
              this.modalStylesOverride.modalFooterBgColor &&
              this.modalStylesOverride.modalFooterBgColor.length > 2
                ? this.modalStylesOverride.modalFooterBgColor
                : "coral"
            };
            padding:15px !important;
            color:#fff;
        }

        .closeBtn{
            float:right;
            color:#fff;
            size: 50px;
        }

        .closeBtn:hover, .closeBtn:focus{
            color:#000;
            cursor: pointer;
        }
        @keyframes onModalOpen{
            from {opacity: 0;} to {opacity: 1;}
        }
    `;
  };
}

export default ModalPopup;
