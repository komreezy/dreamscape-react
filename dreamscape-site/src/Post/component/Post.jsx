import React from 'react';
import '../styles/Post.css';

/**
 * pass in postBody and map over it and make a div for it
 */
const Post = (props) => (
	<div className="panel panel-default post-body" id="post">
      <div className="panel-body">
       {
       <div key={props.idx}>
       		<div id="post-title">
	       		{props.postBody.title}
       		</div>
       		<div id="circle"></div>
       		<div id="user-container">
	       		<div id="post-author">
		       		by {props.postBody.name}
		       	</div>
	       		<div id="post-date">
		       		{props.postBody.date}
	       		</div>
       		</div>
       		<div id="post-body">
	       		{props.postBody.text}
       		</div>
       	</div>
       }
      </div>
    </div>
);

export default Post;

// var bag_items = this.state.bag_items.map((bag_item) => {
//           return (
//               <div key={bag_item.id}>
//                   <h3>quantity: {bag_item.quantity}</h3>
//                   <h3>price: {bag_item.price}</h3>
//                   <p>description: {bag_item.description}</p>
//                   <p>store: {bag_item.storeName}</p>
//               </div>
//           )
//       });

// const Card = (props) => (
//     <div className="card-body" key={props.idx}>
//         {
//             <div>
//                 <img className={"card-image-view"} src={props.cardBody.image}></img>
//                 <div className={"card-detail-container"}>
//                     <div className={"card-description"}>{props.cardBody.description}</div>
//                     <div className={"card-brand-container"}>
//                         <div className={"card-circle-view"}></div>
//                         <div className={"card-brand"}>{props.cardBody.storeName}</div>
//                     </div>
//                 </div>
//             </div>
//         }
//     </div>
// );

// {
      //     bag_items.map((cardBody, idx) => {
      //         return (
      //             <Card key={idx} postBody={cardBody} />
      //         )
      //     })
      // }

      // <div>
      //     {bag_items}
      // </div>