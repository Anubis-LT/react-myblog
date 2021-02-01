import Link from "./Link";

const NavigationMenu = () => {
   return (
      <>
         <nav className="container">
            <div className="col-1">
               <Link />
               <Link />
               <Link />
            </div>
            <div className="col-2">
               <Link />
            </div>
         </nav>
      </>
   );
};
export default NavigationMenu;
