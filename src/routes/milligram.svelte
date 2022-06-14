<script lang=ts>
  // import 'milligram'
</script>

<style>
  .gt {
    @apply bg-lime-400 text-blue pb-4 border-1;
    padding-top: 1rem;
  }
</style>
<div text-rose-4>Rose Color Div</div>
<button text-white bg="blue-400 hover:blue-700" font="lg">Simple button</button>
<h2>This is icon <span class="i-mdi-alarm" bg-lime></span></h2>
<div class="i-logos-vue text-3xl" />
<div class="hover:(bg-gray-400 font-not-italic) font-italic">This is a div</div>
<div class="gt">This paragraph use @apply transform</div>
<main class="wrapper">
  <section class="container" id="typography">
    <h5 class="title">Typography</h5>
    <hr />
    <div class="example">
      <div class="row">
        <div class="column">
          <h1>
            Heading<span class="heading-font-size">
              <code>&lt;h1&gt;</code> 4.6rem (46px)</span
            >
          </h1>
          <h2>
            Heading<span class="heading-font-size">
              <code>&lt;h2&gt;</code> 3.6rem (36px)</span
            >
          </h2>
          <h3>
            Heading<span class="heading-font-size">
              <code>&lt;h3&gt;</code> 2.8rem (28px)</span
            >
          </h3>
          <h4>
            Heading<span class="heading-font-size">
              <code>&lt;h4&gt;</code> 2.2rem (22px)</span
            >
          </h4>
          <h5>
            Heading<span class="heading-font-size">
              <code>&lt;h5&gt;</code> 1.8rem (18px)</span
            >
          </h5>
          <h6>
            Heading<span class="heading-font-size">
              <code>&lt;h6&gt;</code> 1.6rem (16px)</span
            >
          </h6>
        </div>
        <div class="column">
          <p>
            Lorem ipsum dolor sit amet, <u>consectetur adipisicing elit</u>.
          </p>
          <p>
            Obcaecati <s>error</s> a, quas fugit hic,
            <a href=".#">accusantium</a> autem
            <i>necessitatibus praesentium</i> placeat, iusto et
            <b>soluta expedita</b>! Quisquam repellendus
            <small>voluptatem</small>, <mark>tempora iste culpa fuga</mark>,
            <time>on April 29</time>!
          </p>
          <p>
            Quisquam nobis, ad. Iusto, <strong>repudiandae</strong>. Autem
            ipsa blanditiis, quae, fugit nobis
            <em>perspiciatis in beatae vitae</em> numquam illo, architecto
            hic dolor <q>molestiae aliquid</q>.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="container" id="forms">
    <h5 class="title">Forms</h5>
    <hr />
    <div class="example">
      <form>
        <fieldset>
          <legend>Legend</legend>
          <div class="row">
            <div class="column">
              <label for="textField">Text field</label>
              <input type="text" placeholder="Text field" id="textField" />
              <label for="emailField">Email field</label>
              <input
                type="email"
                id="emailField"
                placeholder="Email field"
              />
              <label for="numberField">Number field</label>
              <input
                type="number"
                id="numberField"
                placeholder="Number field"
              />
              <label for="passwordField">Password field</label>
              <input
                type="password"
                id="passwordField"
                placeholder="Password field"
              />
              <label for="selectField">Select field</label>
              <select id="selectField">
                <option value="selectField1">Select field 1</option>
                <option value="selectField2">Select field 2</option>
                <option value="selectField3">Select field 3</option>
                <option value="selectField4">Select field 4</option>
              </select>
              <label for="colorField">Color field</label>
              <input
                type="color"
                id="colorField"
                placeholder="Your browser doesn't support this field."
              />
              <label for="weekField">Week field</label>
              <input
                type="week"
                id="weekField"
                placeholder="Your browser doesn't support this field."
              />
              <label for="datetimeField">Datetime field</label>
              <input
                type="datetime"
                id="datetimeField"
                placeholder="Your browser doesn't support this field."
              />
              <label for="searchField">Search field</label>
              <input
                type="search"
                id="searchField"
                placeholder="Search field"
              />
            </div>
            <div class="column">
              <label for="telField">Tel field</label>
              <input type="tel" id="telField" placeholder="Tel field" />
              <label for="urlField">URL field</label>
              <input type="url" id="urlField" placeholder="URL field" />
              <label for="radioField">Radio field</label>
              <div class="row">
                <div class="column">
                  <input type="radio" id="radioField1" name="radioField" />
                  <label class="label-inline" for="radioField1"
                    >Radio field 1</label
                  >
                </div>
                <div class="column">
                  <input type="radio" id="radioField2" name="radioField" />
                  <label class="label-inline" for="radioField2"
                    >Radio field 2</label
                  >
                </div>
              </div>
              <label for="radioField">Checkbox field</label>
              <div class="row">
                <div class="column">
                  <input type="checkbox" id="checkboxField1" />
                  <label class="label-inline" for="checkboxField1"
                    >Checkbox field 1</label
                  >
                </div>
                <div class="column">
                  <input type="checkbox" id="checkboxField2" />
                  <label class="label-inline" for="checkboxField2"
                    >Checkbox field 2</label
                  >
                </div>
              </div>
              <label for="textareaField">Textarea field</label>
              <textarea
                placeholder="Textarea field"
                id="textareaField"
              ></textarea>
              <label for="dateField">Date field</label>
              <input
                type="date"
                id="dateField"
                placeholder="Your browser doesn't support this field."
              />
              <label for="monthField">Month field</label>
              <input
                type="month"
                id="monthField"
                placeholder="Your browser doesn't support this field."
              />
              <label for="datetimeLocalField">Datetime-Local field</label>
              <input
                type="datetime-local"
                id="datetimeLocalField"
                placeholder="Your browser doesn't support this field."
              />
              <label for="formButtons">Form buttons</label>
              <input type="submit" />
              <input type="reset" />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </section>
  
  <section class="container" id="blockquotes">
    <h5 class="title">Blockquotes</h5>
    <hr />
    <div class="example">
      <div class="row">
        <div class="column">
          <p><q>Yeah!! Milligram is amazing.</q></p>
        </div>
        <div class="column">
          <blockquote>
            <p><em>Yeah!! Milligram is amazing.</em></p>
          </blockquote>
        </div>
      </div>
    </div>
  </section>

  <section class="container" id="buttons">
    <h5 class="title">Buttons</h5>
    <hr />
    <div class="example">
      <div class="row">
        <div class="column">
          <a class="button" href="/">Default Button</a>
          <a class="button button-outline" href="/"
            >Outlined Button</a
          >
          <a class="button button-clear" href="/"
            >Clear Button</a
          >
          <a class="button" disabled href="/"
            >Default Button</a
          >
          <a
            class="button button-outline"
            disabled
            href="/"
            >Outlined Button</a
          >
          <a class="button button-clear" disabled href="/"
            >Clear Button</a
          >
        </div>
        <div class="column">
          <button class="button">Default Button</button>
          <button class="button button-outline">Outlined Button</button>
          <button class="button button-clear">Clear Button</button>
          <button class="button" disabled>Default Button</button>
          <button class="button button-outline" disabled>
            Outlined Button
          </button>
          <button class="button button-clear" disabled>Clear Button</button>
        </div>
        <div class="column">
          <input class="button" type="submit" value="Default Button" />
          <input
            class="button button-outline"
            type="submit"
            value="Outlined Button"
          />
          <input
            class="button button-clear"
            type="submit"
            value="Clear Button"
          />
          <input
            class="button"
            disabled
            type="submit"
            value="Default Button"
          />
          <input
            class="button button-outline"
            disabled
            type="submit"
            value="Outlined Button"
          />
          <input
            class="button button-clear"
            disabled
            type="submit"
            value="Clear Button"
          />
        </div>
      </div>
      <div class="row">
        <div class="column">
          <input class="button" type="reset" value="Default Button" />
          <input
            class="button button-outline"
            type="reset"
            value="Outlined Button"
          />
          <input
            class="button button-clear"
            type="reset"
            value="Clear Button"
          />
          <input
            class="button"
            disabled
            type="reset"
            value="Default Button"
          />
          <input
            class="button button-outline"
            disabled
            type="reset"
            value="Outlined Button"
          />
          <input
            class="button button-clear"
            disabled
            type="reset"
            value="Clear Button"
          />
        </div>
        <div class="column">
          <input class="button" type="button" value="Default Button" />
          <input
            class="button button-outline"
            type="button"
            value="Outlined Button"
          />
          <input
            class="button button-clear"
            type="button"
            value="Clear Button"
          />
          <input
            class="button"
            disabled
            type="button"
            value="Default Button"
          />
          <input
            class="button button-outline"
            disabled
            type="button"
            value="Outlined Button"
          />
          <input
            class="button button-clear"
            disabled
            type="button"
            value="Clear Button"
          />
        </div>
        <div class="column">
          <div class="button">Default Button</div>
          <div class="button button-outline">Outlined Button</div>
          <div class="button button-clear">Clear Button</div>
          <div class="button" disabled>Default Button</div>
          <div class="button button-outline" disabled>Outlined Button</div>
          <div class="button button-clear" disabled>Clear Button</div>
        </div>
      </div>
    </div>
  </section>

  <section class="container" id="lists">
    <h5 class="title">Lists</h5>
    <hr />
    <div class="example">
      <div class="row">
        <div class="column">
          <ul>
            <li>Unordered list item 1</li>
            <li>Unordered list item 2</li>
            <li>
              Unordered list item 3
              <ul>
                <li>Unordered list item 3.1</li>
                <li>Unordered list item 3.2</li>
                <li>Unordered list item 3.3</li>
              </ul>
            </li>
            <li>Unordered list item 4</li>
            <li>Unordered list item 5</li>
          </ul>
        </div>
        <div class="column">
          <ol>
            <li>Ordered list item 1</li>
            <li>Ordered list item 2</li>
            <li>
              Ordered list item 3
              <ol>
                <li>Ordered list item 3.1</li>
                <li>Ordered list item 3.2</li>
                <li>Ordered list item 3.3</li>
              </ol>
            </li>
            <li>Ordered list item 4</li>
            <li>Ordered list item 5</li>
          </ol>
        </div>
        <div class="column">
          <dl>
            <dt>Description list item 1</dt>
            <dt>Description list item 2</dt>
            <dt>Description list item 3</dt>
            <dd>Description list item 3.1</dd>
            <dd>Description list item 3.2</dd>
            <dd>Description list item 3.3</dd>
            <dt>Description list item 4</dt>
            <dt>Description list item 5</dt>
          </dl>
        </div>
      </div>
    </div>
  </section>


</main>