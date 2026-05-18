import { useState } from "react";
import {
  AlertTriangle,
  Brain,
  Wrench,
  Sparkles,
} from "lucide-react";

import "./App.css";

function App() {
  const [errorInput, setErrorInput] = useState("");
  const [result, setResult] = useState(null);

  const errorDatabase = {
    NullPointerException: {
      roast:
        "Bro tried accessing an object that literally does not exist.",
      meaning:
        "You are trying to use an object that contains a null value.",
      fix:
        "Initialize the object before accessing its methods or properties.",
    },

    SyntaxError: {
      roast:
        "Python saw the syntax and immediately gave up.",
      meaning:
        "There is a syntax issue in your code structure.",
      fix:
        "Check brackets, indentation, colons, or missing characters.",
    },

    "Segmentation fault": {
      roast:
        "Your program entered restricted memory territory.",
      meaning:
        "Your application attempted illegal memory access.",
      fix:
        "Validate pointers, arrays, and memory allocations carefully.",
    },

    IndexOutOfBoundsException: {
      roast:
        "You tried accessing premium DLC content from the array.",
      meaning:
        "You accessed an index beyond the available range.",
      fix:
        "Ensure the index is within array or list boundaries.",
    },
  };

  const translateError = () => {
    if (!errorInput.trim()) {
      setResult(null);
      return;
    }

    const matchedError = Object.keys(errorDatabase).find((key) =>
      errorInput.toLowerCase().includes(key.toLowerCase())
    );

    if (matchedError) {
      setResult(errorDatabase[matchedError]);
    } else {
      setResult({
        roast:
          "Compiler confused. Developer also confused.",
        meaning:
          "Unknown or unsupported error type.",
        fix:
          "Review logs carefully and improve exception handling.",
      });
    }
  };

  return (
    <div className="app">

      <div className="noise"></div>

      <div className="container">

        {/* NAVBAR */}

        <div className="navbar">

          <div className="logo-section">

            <div className="logo-box">
              <Sparkles size={22} />
            </div>

            <div>
              <h1>NullSense</h1>

              <p>
                AI-powered compiler translator for emotionally damaged developers
              </p>
            </div>

          </div>

          <button className="smart-btn">
            GenZ Mode
          </button>

        </div>

        {/* HERO */}

        <div className="hero">

          <div className="hero-badge">
            currently saving developers from mental breakdowns
          </div>

          <h2>
            compiler errors,
            <span>but understandable.</span>
          </h2>

          <p>
            Paste scary compiler errors and let NullSense
            translate them into actual human language with
            debugging guidance and developer therapy.
          </p>

        </div>

        {/* INPUT */}

        <div className="input-card">

          <div className="input-header">

            <h3>Paste Your Error</h3>

            <span>compiler panic detected</span>

          </div>

          <textarea
            placeholder="Example: NullPointerException at line 14"
            value={errorInput}
            onChange={(e) =>
              setErrorInput(e.target.value)
            }
          ></textarea>

          <button
            className="analyze-btn"
            onClick={translateError}
          >
            Translate My Suffering
          </button>

        </div>

        {/* RESULTS */}

        {result && (
          <div className="results-grid">

            <div className="result-card translation-card">

              <div className="result-top">

                <div className="icon-box purple">
                  <AlertTriangle size={20} />
                </div>

                <div>

                  <span className="card-tag">
                    GenZ Translation
                  </span>

                  <h3>
                    {result.roast}
                  </h3>

                </div>

              </div>

            </div>

            <div className="result-card meaning-card">

              <div className="result-top">

                <div className="icon-box blue">
                  <Brain size={20} />
                </div>

                <div>

                  <span className="card-tag">
                    Actual Meaning
                  </span>

                  <h3>
                    {result.meaning}
                  </h3>

                </div>

              </div>

            </div>

            <div className="result-card fix-card">

              <div className="result-top">

                <div className="icon-box pink">
                  <Wrench size={20} />
                </div>

                <div>

                  <span className="card-tag">
                    Fix Suggestion
                  </span>

                  <h3>
                    {result.fix}
                  </h3>

                </div>

              </div>

            </div>

          </div>
        )}

        {/* FOOTER */}

        <footer className="footer">

          <p>
            © 2026 NullSense. Built by
            <span> Rohith V K</span>
          </p>

          <a
            href="https://github.com/RohiVK"
            target="_blank"
            rel="noreferrer"
          >
            github.com/RohiVK
          </a>

        </footer>

      </div>
    </div>
  );
}

export default App;