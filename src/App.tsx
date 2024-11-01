import { Card } from "./components/Card/Card";
import "../src/index.css";

export function App() {
  

  return (
    <>
      <main className="main">
       
        <section className="hero p-8">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Cardly</h1>
              <p className="py-6">
                Welcome to Cardly – your go-to resource for creating powerful
                and reusable card components in React! Our site is dedicated to
                helping you design versatile, customizable cards that can adapt
                to any use case.
              </p>
            </div>
          </div>
        </section>


        <section className="form p-4">
          <select className="select select-primary w-full">
            <option value="all">All</option>
            <option value="gallery card">Gallery card</option>
            <option value="product listing">Product listing</option>
            <option value="project showcase">Project showcase</option>
            <option value="team directory">Team directory</option>
          </select>
        </section>


        <section className="main__gallery grid grid-cols-2 gap-2 justify-items-center">
         
          <Card
            title="Gallery card"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            imageSrc="src/assets/istanbul.jpg"
          />

          <Card
            title="Product listing"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            imageSrc="src/assets/omer-haktan-bulut-RorWhjgHcHw-unsplash.jpg"
            actions={
              <>
                <button className="btn btn-primary">Buy now</button>
              </>
            }
          />

          <Card
            title="Project showcase"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            imageSrc="src/assets/ales-nesetril-Im7lZjxeLhg-unsplash.jpg"
            actions={
              <>
                <button className="btn btn-outline btn-primary">
                  Read more
                </button>
                <button className="btn btn-outline btn-secondary">
                  Like
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </>
            }
          />

         
          <Card
            title="Team directory"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            imageSrc="src/assets/wells-chan-l3hwxnGJXn8-unsplash.jpg"
            actions={
              <>
                <div className="grid grid-flow-col gap-4">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </a>
                </div>
              </>
            }
          />
        </section>
      </main>
    </>
  );
}
