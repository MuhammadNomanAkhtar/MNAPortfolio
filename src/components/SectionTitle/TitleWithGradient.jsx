import React from "react";

export default function TitleWithGradient() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgb(72, 16, 162) 0%, rgba(87, 57, 53, 0) 100%), radial-gradient(50% 50% at 50% 50%, rgb(148, 89, 76) 0%, rgba(87, 57, 53, 0) 100%), radial-gradient(50% 50% at 50% 50%, rgb(67, 61, 184) 0%, rgba(87, 57, 53, 0) 100%)",
          filter: "blur(64px)",
          opacity: "0.9, 0.95, 0.7",
          zIndex: "-1",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Inter-Black, Inter, sans-serif",
            fontSize: "56px",
            fontWeight: "900",
            letterSpacing: "0.02em",
            lineHeight: "1em",
            color: "white",
            opacity: "0.5",
            textShadow: "rgba(0, 0, 0, 0.15) 0px 8px 13px",
          }}
        >
          SERVICES
        </p>
      </div>
    </div>
  );
}

// export function TitleWithGradientV2() {
//   return (
//     <div>
//       <div
//         name="SERVICES background"
//         data-framer-name="H2 Services"
//         style={{
//           backgroundColor: "rgb(18, 17, 32)",
//           height: "100%",
//           width: "100%",
//           transform: "none",
//           transformOrigin: "50% 50% 0px",
//         }}
//       >
//         <div style={{ transform: "none", transformOrigin: "50% 50% 0px" }}>
//           <div style={{ display: "contents" }}>
//             <div
//               data-framer-name="Small"
//               style={{
//                 backgroundColor: "rgb(18, 17, 32)",
//                 height: "100%",
//                 width: "100%",
//                 transform: "none",
//                 transformOrigin: "50% 50% 0px",
//               }}
//             >
//               <div
//                 style={{
//                   background:
//                     "radial-gradient(50% 50% at 50% 50%, rgb(72, 16, 162) 0%, rgba(87, 57, 53, 0) 100%)",
//                   filter: "blur(64px)",
//                   opacity: 0.9,
//                   transform: "none",
//                   transformOrigin: "50% 50% 0px",
//                 }}
//               ></div>
//               <div
//                 style={{
//                   background:
//                     "radial-gradient(50% 50% at 50% 50%, rgb(148, 89, 76) 0%, rgba(87, 57, 53, 0) 100%)",
//                   filter: "blur(64px)",
//                   opacity: 0.95,
//                   transform: "none",
//                   transformOrigin: "50% 50% 0px",
//                 }}
//               ></div>
//               <div
//                 style={{
//                   background:
//                     "radial-gradient(50% 50% at 50% 50%, rgb(67, 61, 184) 0%, rgba(87, 57, 53, 0) 100%)",
//                   filter: "blur(64px)",
//                   opacity: 0.7,
//                   transform: "none",
//                   transformOrigin: "50% 50% 0px",
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>
//         <div
//           data-framer-name="H1"
//           style={{
//             transform: "perspective(1200px)",
//             transformOrigin: "50% 50% 0px",
//           }}
//         >
//           <div
//             style={{
//               outline: "none",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "flex-start",
//               flexShrink: 0,
//               "--extracted-r6o4lv": "rgba(245, 245, 245, 0.8)",
//               "--framer-link-text-color": "rgb(0, 153, 255)",
//               "--framer-link-text-decoration": "underline",
//               "--framer-paragraph-spacing": "0px",
//               textShadow: "rgba(0, 0, 0, 0.15) 0px 8px 13px",
//               transform: "translate(-50%, -50%)",
//               transformOrigin: "50% 50% 0px",
//             }}
//             data-framer-component-type="RichTextContainer"
//           >
//             <p
//               style={{
//                 "--font-selector": "SW50ZXItQmxhY2s=",
//                 "--framer-font-family": '"Inter-Black", "Inter", sans-serif',
//                 "--framer-font-size": "56px",
//                 "--framer-font-weight": "900",
//                 "--framer-letter-spacing": "0.02em",
//                 "--framer-line-height": "1em",
//                 "--framer-text-alignment": "center",
//                 "--framer-text-color": "var(--extracted-r6o4lv)",
//               }}
//             >
//               SERVICES
//             </p>
//           </div>
//           <div
//             style={{
//               outline: "none",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "flex-start",
//               flexShrink: 0,
//               "--extracted-r6o4lv": "rgba(245, 245, 245, 0.8)",
//               "--framer-link-text-color": "rgb(0, 153, 255)",
//               "--framer-link-text-decoration": "underline",
//               "--framer-paragraph-spacing": "0px",
//               textShadow: "rgb(221, 215, 176) 0px 0px 0px",
//               transform: "translate(-50%, -50%)",
//               transformOrigin: "50% 50% 0px",
//             }}
//             data-framer-component-type="RichTextContainer"
//           >
//             <p
//               style={{
//                 "--font-selector": "SW50ZXItQmxhY2s=",
//                 "--framer-font-family": '"Inter-Black", "Inter", sans-serif',
//                 "--framer-font-size": "56px",
//                 "--framer-font-weight": "900",
//                 "--framer-letter-spacing": "0.02em",
//                 "--framer-line-height": "1em",
//                 "--framer-text-alignment": "center",
//                 "--framer-text-color": "var(--extracted-r6o4lv)",
//               }}
//             >
//               SERVICES
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
