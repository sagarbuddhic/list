import logo from "./logo.svg";
import React, { useRef, useEffect } from "react";
import "./App.css";
import { useGesture } from "react-with-gesture";
import clamp from "lodash-es/clamp";
import { useSprings, animated, interpolate } from "react-spring";
import swap from "lodash-move";

// WHEN dragging, this function will be fed with all arguments.
// OTHERWISE, only the list order is relevant.
const fn = (order, down, originalIndex, curIndex, y) => (index) =>
  down && index === originalIndex
    ? /*
      No need to transition the following properties:
      - z-index, the elevation of the item related to the root of the view; it should pop straight up to 1, from 0.
      - y, the translated distance from the top; it's already being updated dinamically, smoothly, from react-gesture.
      Thus immediate returns `true` for both.
    */
      {
        y: curIndex * 100 + y,
        scale: 1.1,
        zIndex: "1",
        shadow: 15,
        immediate: (n) => n === "y" || n === "zIndex",
      }
    : {
        y: order.indexOf(index) * 100,
        scale: 1,
        zIndex: "0",
        shadow: 1,
        immediate: false,
      };

function App() {
  useEffect(() => {
    console.log("inside useEffect");
    window.addEventListener("devicelight", function (event) {
      var bodyBg = document.body.style;
      console.log(`devicelight event value:${JSON.stringify(event)}`);

      //event.value is the lux value returned by the sensor on the device
      if (event.value < 100) {
        alert("Hey, you! You are working in a dark environment");

        bodyBg.backgroundColor = "lightgrey";
      } else {
        bodyBg.backgroundColor = "#fff";
      }
    });
  });

  const items = "testing the list".split(" ");
  const order = useRef(items.map((_, index) => index));
  const [springs, setSprings] = useSprings(items.length, fn(order.current));
  const bind = useGesture(({ args: [originalIndex], down, delta: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex);
    const curRow = clamp(
      Math.round((curIndex * 100 + y) / 100),
      0,
      items.length - 1
    );
    const newOrder = swap(order.current, curIndex, curRow);
    /*
      Curry all variables needed for the truthy clause of the ternary expression from fn,
      so that new objects are fed to the springs without triggering a re-render.
    */
    setSprings(fn(newOrder, down, originalIndex, curIndex, y));
    // Settles the new order on the end of the drag gesture (when down is false)
    if (!down) order.current = newOrder;
  });
  return (
    <div className="App">
      <div class="content" style={{ height: items.length * 100 }}>
        {springs.map(({ zIndex, shadow, y, scale }, i) => (
          <animated.div
            {...bind(i)}
            key={i}
            style={{
              zIndex,
              boxShadow: shadow.interpolate(
                (s) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`
              ),
              transform: interpolate(
                [y, scale],
                (y, s) => `translate3d(0,${y}px,0) scale(${s})`
              ),
            }}
            children={items[i]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
