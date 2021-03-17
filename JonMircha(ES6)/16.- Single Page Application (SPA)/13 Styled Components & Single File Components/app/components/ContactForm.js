export function ContactForm() {
  const d = document,
    $form = d.createElement("form"),
    $styles = d.getElementById("dynamic-styles");

  $form.classList.add("contact-form");

  $styles.innerHTML = `
    .contact-form{
        --form-ok-color: #4caf50;
        --form-error-color: #f44336;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }
    
    .contact-form > *{
        padding: 0.5rem;
        margin: 1rem auto;
        display: block;
        width: 100%;
        border-radius: .35rem;
    }
    
    .contact-form textarea{
        resize: none;
    }
    
    .contact-form legend,
    .contact-form-response{
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
    }
    
    .contact-form input,
    .contact-form textarea{
        font-size: 1rem;
        font-family: sans-serif;
    }
    
    .contact-form input[type="submit"]{
        width: 25%;
        font-weight: bold;
        cursor: pointer;
    }
    
    .contact-form *::placeholder{
        color: #000
    }
    
    .contact-form [required]:valid{
        border: thin solid var(--form-ok-color);
    }
    
    .contact-form [required]:invalid{
        border: thin solid var(--form-error-color);
    }
    
    .contact-form-error{
        margin-top: -1rem;
        font-size: 80%;
        background-color: var(--form-error-color);
        color: #DDD;
        transition: all 800ms ease;
    }
    
    .contact-form-error.is-active{
        display: block;
        animation: show-message 1s 1 normal 0s ease-out both;
    }
    
    .contact-form-loader{
        text-align: center;
    }
    
    .none{
        display: none;
    }
    
    @keyframes show-message{
        0%{
            visibility: hidden;
            opacity: 0;
        }
    
        100%{
            visibility: visible;
            opacity: 1;
        }
    }
    `;

  $form.innerHTML = `
    <legend>Send me your comments 🤓</legend>
    <input
      type="text"
      name="name"
      placeholder="Type your name"
      title="The name just accept lyrics and spaces in white"
      pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Type your email"
      title="email incorrect"
      pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$"
      required
    />
    <input
      type="text"
      name="subject"
      placeholder="Subject"
      title="The subject is required"
      required
    />
    <textarea
      name="comments"
      cols="50"
      rows="5"
      placeholder="Type your comments"
      title="Your comment is major to 255 words"
      data-pattern="^.{1,255}$"
      required
    ></textarea>
    <input type="submit" value="Send" />
    <div class="contact-form-loader none">
      <img src="app/assets/loader.svg" alt="Loading..." />
    </div>
    <div class="contact-form-response none">
      <p>Your dates have been sent 🤓 ¡Thanks!</p>
    </div>
    `;

    function validationsForm() {
        const $form = d.querySelector(".contact-form "),
          $inputs = d.querySelectorAll(".contact-form [required]");
      
        $inputs.forEach((input) => {
          const $span = d.createElement("span");
          $span.id = input.name;
          $span.textContent = input.title;
          $span.classList.add("contact-form-error", "none");
          input.insertAdjacentElement("afterend", $span);
        });
      
        d.addEventListener("keyup", (e) => {
          if (e.target.matches(".contact-form [required]")) {
            let $input = e.target,
              pattern = $input.pattern || $input.dataset.pattern;
      
            if (pattern && $input.value !== "") {
              let regex = new RegExp(pattern);
      
              return !regex.exec($input.value)
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active");
            }
      
            if (!pattern) {
              return $input.value === ""
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active");
            }
          }
        });
      
        d.addEventListener("submit", (e) => {
          e.preventDefault();
      
          const $loader = d.querySelector(".contact-form-loader"),
            $response = d.querySelector(".contact-form-response");
      
          $loader.classList.remove("none");
      
          fetch("https://formsubmit.co/ajax/alfredvzqz239@gmail.com", {
              method: "POST",
              body: new FormData(e.target)
          })
              .then(res => res.ok ? res.json() : Promise.reject(res))
              .then(json => {
                  console.log(json);
                  $loader.classList.add("none");
                  $response.classList.remove("none");
                  $response.innerHTML = `<p>${json.message}</p>`
                  $form.reset();
              })
              .catch(err => {
                  console.log(err);
                  let message = err.statuText || "Ocurrió un error, intentalo nuevamente";
                  $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
              })
              .finally(() => setTimeout(() => {
                  $response.classList.add("none");
                  $response.innerHTML = "";
              }, 3000));
        });
      }

  setTimeout(() => validationsForm(), 100);

  return $form;
}
