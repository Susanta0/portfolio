'use client'
import { useSpring, animated, config } from "react-spring";
import blobshape from "blobshape";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import profilePic from "/public/profile/profilepic.png"

export const ProfilePic = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="">
      <div style={{ position: "relative", }} className="w-[300px] lg:w-[450px]">
        <Blob
          color="#6F6032"
          style={{ opacity: 0.2, position: "absolute", top: 0, left: 0, }}
          
        />
        <Blob
          color="#6F6032"
          style={{ opacity: 0.4, position: "absolute", top: 0, left: 0 }}
        />
        <Blob
          color="#6F6032"
          style={{ opacity: 0.5, position: "absolute", top: 0, left: 0 }}
        />
        <
          
          Image
          src={profilePic}
          width={230}
          height={0}
          className=" rounded-full scale-105"
          style={{
            // width: "85%",
            opacity: 0.95,
            position: "relative",
            top: 0,
            left: 65,
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
    <svg viewBox="0 0 500 500" width="" style={props.style} className="border">
      {!props.image && <animated.path fill={props.color} d={path} />}
      {props.image && (
        <>
          {/* <defs>
            <clipPath id="a">
              <animated.path fill={props.color} d={path} />
            </clipPath>
          </defs> */}
        </>
      )}
    </svg>
  );
}

