import ItemTitle from "./ItemTitle";
import ItemSubtitle from "./ItemSubtitle";
import ItemDescription from "./ItemDescription";
import ItemPicture from "./ItemPicture";

const Item = (props) => {
   return (
      <>
         <ItemTitle itemTitle={props.itemTitle} />
         <ItemSubtitle itemSubtitle={props.itemSubtitle} />
         <ItemPicture itemPicture={props.itemPicture} />
         <ItemDescription itemDescription={props.itemDescription} />
      </>
   );
};
export default Item;
