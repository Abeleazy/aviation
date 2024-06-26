import React from "react";

function AddNewMember() {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 col-12">
        <div className="crancy-header__form crancy-header__form--v2">
          <form
            className="crancy-header__form-inner crancy-header__form-inner__profile"
            action="#"
          >
            <button className="search-btn" type="submit">
              <svg
                className="crancy-default__fill"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.6888 18.2542C10.5721 22.0645 4.46185 20.044 1.80873 16.2993C-0.984169 12.3585 -0.508523 7.01726 2.99926 3.64497C6.41228 0.362739 11.833 0.112279 15.5865 3.01273C19.3683 5.93475 20.8252 11.8651 17.3212 16.5826C17.431 16.6998 17.5417 16.8246 17.6599 16.9437C19.6263 18.9117 21.5973 20.8751 23.56 22.8468C24.3105 23.601 24.0666 24.7033 23.104 24.9575C22.573 25.0972 22.1724 24.8646 21.8075 24.4988C19.9218 22.6048 18.0276 20.7194 16.1429 18.8245C15.9674 18.65 15.8314 18.4361 15.6888 18.2542ZM2.39508 10.6363C2.38758 14.6352 5.61109 17.8742 9.62079 17.8977C13.6502 17.9212 16.9018 14.6914 16.9093 10.6597C16.9169 6.64673 13.7046 3.41609 9.69115 3.39921C5.66457 3.38232 2.40259 6.61672 2.39508 10.6363Z"></path>
              </svg>
            </button>
            <input
              name="s"
              type="text"
              placeholder="Search items, collections..."
            />
          </form>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-12">
        <div className="crancy-team-meta">
          <div className="crancy-team-meta__single">
            <button
              className="crancy-btn crancy-gbcolor"
              data-toggle="modal"
              data-target="#exampleModalLong"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.95037 13.9996C6.35389 13.9778 5.84216 13.5247 5.79077 12.9295C5.75578 12.5223 5.76999 12.1102 5.76944 11.7003C5.76726 10.5618 5.7689 9.42333 5.7689 8.23184C5.62565 8.23184 5.51904 8.23184 5.41243 8.23184C4.04562 8.23184 2.67826 8.23676 1.31144 8.22965C0.515412 8.22528 -0.0324072 7.67381 0.00148975 6.93596C0.0282793 6.35169 0.476594 5.86143 1.05776 5.78819C1.1928 5.77125 1.33058 5.76961 1.46671 5.76906C2.77886 5.76797 4.09154 5.76852 5.40368 5.76852C5.51084 5.76852 5.61855 5.76852 5.7689 5.76852C5.7689 5.63625 5.7689 5.53077 5.7689 5.42528C5.7689 4.05835 5.76507 2.69141 5.77054 1.32448C5.77382 0.535255 6.29867 -0.0113003 7.02309 0.000177399C7.63159 0.0100154 8.15645 0.464749 8.20893 1.07088C8.24447 1.47806 8.22971 1.89016 8.2308 2.30008C8.23299 3.43855 8.23135 4.57703 8.23135 5.75376C8.35163 5.75922 8.45605 5.76797 8.56048 5.76797C9.93659 5.76906 11.3127 5.7636 12.6888 5.7707C13.4641 5.77453 14.0042 6.29485 13.9999 7.00865C13.996 7.62954 13.534 8.14603 12.9162 8.2149C12.7899 8.22911 12.6615 8.23075 12.5341 8.23075C11.2219 8.23184 9.90925 8.23129 8.59711 8.23129C8.4894 8.23129 8.38225 8.23129 8.23135 8.23129C8.23135 8.36356 8.23135 8.4685 8.23135 8.57398C8.23135 9.94092 8.23572 11.3078 8.22916 12.6748C8.22588 13.4777 7.68736 14.0264 6.95037 13.9996Z"
                  fill="white"
                />
              </svg>
              Add Shareholder
            </button>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewMember;
