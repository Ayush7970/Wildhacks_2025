// 'use client'
// import Image from "next/image";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import React, { useState, useEffect } from 'react';
// // import { GoogleGenAI } from "@google/generative-ai";


// // const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });


// // Simulated API function for Gemini
// // async function fetchGeminiResponse(prompt) {
// //     // Replace with your Gemini API call
// //     const response = await ai.models.generateContent({
// //       model: "gemini-2.0-flash",
// //       // the contents will be the prompt that the user has entered
// //       contents: "Hello there",

// //       // the system instruction will contain the formula for calculating tarriffs and what to return
// //       config: {
// //         systemInstruction: "You are a cat. Your name is Neko.",
// //       },
// //     });

// //     console.log(response.text);
// //     console.log("Sending to Gemini:", prompt);

// //     return `You asked about: ${prompt}`;
// // }


// // Simulated API for commodities
// async function fetchTrendingCommodities() {
//   // Simulate fetching data from the Flask API
//   const response = await fetch("http://127.0.0.1:5000/usda/top-exports");
//   const data = await response.json();

//   if (data.status === "success") {
//     return commodities.map((item) => ({
//       ...item,
//       price: parseFloat(item.price.toFixed(2)),
//     }));
//   } else {
//     console.error("Error fetching commodities:", data.message);
//     return [
//       { name: "Wheat", price: 231.42 },
//       { name: "Soybeans", price: 318.29 },
//       { name: "Corn", price: 187.56 },
//     ];
//   }
// }



// // this is the landing page. it contains the search bar using Gemini and displays trending commodities
// // people are purchasing.

// export default function Search() {

//     const [userInput, setUserInput] = useState('');
//     const [geminiResponse, setGeminiResponse] = useState('');
  
//     // 🔁 Load trending commodities on page load
//     useEffect(() => {
//       fetchTrendingCommodities().then(setTrending);
//     }, []);
  
//     // 🔍 Handle form submission
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       const response = await fetchGeminiResponse(userInput);
//       setGeminiResponse(response);
//     };

//     // default value before plumbing with API
//     const [trending, setTrending] = React.useState([
//         { name: "Wheat", price: 231.42 },
//         { name: "Soybeans", price: 318.29 },
//         { name: "Corn", price: 187.56 },
//       ]);
    
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-12 pb-24 gap-20 sm:p-24 font-[family-name:var(--font-geist-sans)]">
//         <header className="text-center mb-12">
//             {/* this image should be the new logo */}
//             <Image
//             className="dark:invert"
//             src="/next.svg"
//             alt="Next.js logo"
//             width={200}
//             height={42}
//             priority
//             />
//         </header>

//       <main className="flex flex-col gap-[40px] row-start-2 items-center sm:items-start">
    

//         {/* i will need to create a search function that returns separately here */}

//         <div className="grid w-full max-w-md items-center gap-2 scale-140">
//               <Label htmlFor="search">What produce would you like to buy?</Label>
//               <form method="GET" action="/search" className="flex w-full max-w-sm items-center space-x-2">
//                 <Input type="text" placeholder="I'm importing 100 kilograms of avocado from Mexico"/>
//                 <Button type="submit">Search</Button>
//               </form>
//         </div>


//         {/* this is the boxes containing prices for trending commodities */}
//         <div>
//             <h2 className="text-xl font-bold mb-4">Trending Commodities</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                 {trending.map((item, index) => (
//                 <div key={index} className="rounded-2xl p-4 shadow-md border bg-white dark:bg-gray-950">
//                     <h3 className="text-lg font-semibold">{item.name}</h3>
//                     <p className="text-muted-foreground">${item.price.toFixed(2)}</p>
//                 </div>
//                 ))}
//             </div>
//         </div>


//         <div className="flex gap-6 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-12 sm:h-14 px-5 sm:px-6 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={24}
//               height={24}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-12 sm:h-14 px-5 sm:px-6 w-full sm:w-auto md:w-[180px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>

      
//       <footer className="row-start-3 flex gap-[28px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={18}
//             height={18}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={18}
//             height={18}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={18}
//             height={18}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

'use client';

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from 'react';

export default function Search() {
  const [userInput, setUserInput] = useState('');
  const [geminiResponse, setGeminiResponse] = useState('');
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/usda/top-exports-json")
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          setTrending(data.data);
        } else {
          console.error("Error loading commodities", data.message);
        }
      })
      .catch(err => console.error("Error hitting Flask backend", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Plug in Gemini if needed
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-12 pb-24 gap-20 sm:p-24 font-[family-name:var(--font-geist-sans)]">
      <header className="text-center mb-12">
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={200} height={42} priority />
      </header>

      <main className="flex flex-col gap-[40px] row-start-2 items-center sm:items-start">
        <div className="grid w-full max-w-md items-center gap-2 scale-140">
          <Label htmlFor="search">What produce would you like to buy?</Label>
          <form method="GET" action="/search" className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="I'm importing 100 kilograms of avocado from Mexico"/>
            <Button type="submit">Search</Button>
          </form>
        </div>

        <div className="w-full">
          <h2 className="text-xl font-bold mb-4">Top Agri Exports to India</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {trending.map((item, idx) => (
              <div key={idx} className="rounded-2xl p-4 shadow-md border bg-white dark:bg-gray-950">
                <h3 className="text-md font-semibold">{item.name}</h3>
                <p className="text-muted-foreground">Value: ${item.value.toLocaleString()}</p>
                <p className="text-sm text-gray-500">HS Code: {item.hs10}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}