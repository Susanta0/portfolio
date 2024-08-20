'use client'
import { useSpring, animated, config } from "react-spring";
import blobshape from "blobshape";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export const ProfilePic = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="App">
      <div style={{ position: "relative" }}>
        <Blob
          color="#000000"
          style={{ opacity: 0.2, position: "absolute", top: 0, left: 0 }}
        />
        <Blob
          color="#000000"
          style={{ opacity: 0.4, position: "absolute", top: 0, left: 0 }}
        />
        <Blob
          color="#000000"
          style={{ opacity: 0.5, position: "absolute", top: 0, left: 0 }}
        />
        <Blob
          image
          style={{
            width: "85%",
            opacity: 0.95,
            position: "relative",
            top: 25,
            left: 35,
            borderRadius: "50%",
            border:"1px solid red"
            
          }}
        />
      </div>
    </div>
  );
}

function getRandomPath() {
  return blobshape({
    growth: 8,
    edges: 18
  }).path;
}

function Blob(props) {
  const [flip, setFlip] = useState(false);

  const { path } = useSpring({
    to: { path: getRandomPath() },
    from: { path: getRandomPath() },
    reverse: flip,
    config: {
      duration: props.image ? 9000 : 6000
    },
    onRest: () => setFlip(!flip),
  });

  return (
    <svg viewBox="0 0 500 500" width="130%" style={props.style} className="mb-20 mr-10">
      {!props.image && <animated.path fill={props.color} d={path} />}
      {props.image && (
        <>
          <defs>
            <clipPath id="a">
              <animated.path fill={props.color} d={path} />
            </clipPath>
          </defs>
          <Image
            className="absolute opacity-90"
            width={500}
            height={500}
            src="/profilepic.png"
            alt="Profile Picture"
            style={{ clipPath: "url(#a)" }}
          />
        </>
      )}
    </svg>
  );
}
