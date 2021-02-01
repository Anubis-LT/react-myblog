import Item from "../Item/Item";

const MainContent = () => {
   return (
      <>
         <div className="col-a">
            <div>
               <Item
                  itemTitle="TITLE HEADING"
                  itemSubtitle="Title Description"
                  itemPicture="Picture"
                  itemDescription="Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, a
                  t ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque.
                  "
               />
            </div>
            <div>
               <Item
                  itemTitle="title2"
                  itemSubtitle="soustitre2"
                  itemPicture="Picture2"
                  itemDescription="description2"
               />
            </div>
         </div>
      </>
   );
};
export default MainContent;
