import './Footer.css'
// const Footer = () =>{
//     return (

//         <div>



//             <footer>
//                 <div style={{
//                     backgroundColor:"#rgb(82, 129, 113)",
//                     height:"50px", bottom:"0", 
//                     display:"flex",
                    
//                     justifyContent:"center",
//                     justifyItems:"center"
//                     }}>
//                         © 2025 Vivekanand College. All rights reserved.
//                 </div>
//             </footer>





//         </div>
//     )
// }

// export default Footer;
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Vivekanand College. All rights reserved.</p>
    </footer>
  );
}
export default Footer