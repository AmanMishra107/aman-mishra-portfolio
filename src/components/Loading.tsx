import { useEffect, useRef, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";

// Random hex/binary stream characters for the matrix rain
const MATRIX_CHARS = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ!@#$%^&*<>{}[]ABCDEF0123456789";

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(224, 242, 241, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        const x = i * fontSize;

        // Lead character is bright green, trail fades
        if (Math.random() > 0.95) {
          ctx.fillStyle = "#ffffff";
        } else {
          ctx.fillStyle = "rgba(0,0,0,0.15)";
        }

        ctx.fillText(char, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 50);
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-canvas" />;
};

const HACK_LINES = [
  "> Initializing secure connection...",
  "> Bypassing firewall [████████░░] 80%",
  "> Decrypting RSA-2048 keys...",
  "> PORT SCAN: 22/ssh 80/http 443/https",
  "> Injecting payload... SUCCESS",
  "> Running Metasploit module...",
  "> CVE-2024-1337 exploit loaded",
  "> Privilege escalation: ROOT ✓",
  "> Clearing logs...",
  "> Connection established [AES-256]",
];

const TerminalLines = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine >= HACK_LINES.length) return;
    const timeout = setTimeout(() => {
      setLines((prev) => [...prev, HACK_LINES[currentLine]]);
      setCurrentLine((prev) => prev + 1);
    }, 380 + Math.random() * 250);
    return () => clearTimeout(timeout);
  }, [currentLine]);

  return (
    <div className="terminal-lines">
      {lines.map((line, i) => (
        <div key={i} className="terminal-line" style={{ animationDelay: `${i * 0.05}s` }}>
          {line}
        </div>
      ))}
      <span className="terminal-cursor">_</span>
    </div>
  );
};

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [glitch, setGlitch] = useState(false);

  if (percent >= 100) {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    }, 600);
  }

  // Glitch effect trigger
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 180);
    }, 2800 + Math.random() * 1500);
    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    import("./utils/initialFX").then((module) => {
      if (isLoaded) {
        setClicked(true);
        setTimeout(() => {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        }, 900);
      }
    });
  }, [isLoaded]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      {/* Matrix rain background */}
      <MatrixRain />

      <div className="loading-header">
        <a href="/#" className={`loader-title ${glitch ? "glitch-text" : ""}`} data-cursor="disable" data-text="AM">
          AM
        </a>
        <div className={`loaderGame ${clicked && "loader-out"}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>

      {/* Terminal hacking lines — top left overlay */}
      <div className={`terminal-overlay ${clicked ? "terminal-out" : ""}`}>
        <div className="terminal-header">
          <span className="terminal-dot red"></span>
          <span className="terminal-dot yellow"></span>
          <span className="terminal-dot green"></span>
          <span className="terminal-title">root@AM:~$</span>
        </div>
        <TerminalLines />
      </div>

      {/* Scanning line effect */}
      <div className={`scan-line ${clicked ? "scan-out" : ""}`}></div>

      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee>
            <span> Ethical Hacker</span>
            <span> Full Stack Developer</span>
            <span> Cybersecurity Engineer</span>
            <span> Penetration Tester</span>
            <span> Ethical Hacker</span>
            <span> Full Stack Developer</span>
            <span> Cybersecurity Engineer</span>
            <span> Penetration Tester</span>
          </Marquee>
        </div>

        <div
          className={`loading-wrap ${clicked && "loading-clicked"}`}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded && "loading-complete"} ${glitch ? "glitch-btn" : ""}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  {loaded ? "ACCESS GRANTED" : "DECRYPTING"} <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>ENTER SYSTEM</span>
            </div>
          </div>
        </div>

        {/* Corner HUD elements */}
        <div className={`hud-corner hud-tl ${clicked ? "hud-out" : ""}`}>
          <div className="hud-line"></div>
          <div className="hud-line-v"></div>
        </div>
        <div className={`hud-corner hud-tr ${clicked ? "hud-out" : ""}`}>
          <div className="hud-line"></div>
          <div className="hud-line-v"></div>
        </div>
        <div className={`hud-corner hud-bl ${clicked ? "hud-out" : ""}`}>
          <div className="hud-line"></div>
          <div className="hud-line-v"></div>
        </div>
        <div className={`hud-corner hud-br ${clicked ? "hud-out" : ""}`}>
          <div className="hud-line"></div>
          <div className="hud-line-v"></div>
        </div>

        {/* Status bar bottom */}
        <div className={`status-bar ${clicked ? "status-out" : ""}`}>
          <span className="status-item blink-dot">● LIVE</span>
          <span className="status-item">SYS:{percent}%</span>
          <span className="status-item">ENC:AES-256</span>
          <span className="status-item">IP:0.0.0.0</span>
          <span className="status-item">NET:SECURE</span>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
