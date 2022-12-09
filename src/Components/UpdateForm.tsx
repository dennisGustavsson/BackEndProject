import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IProductContext, ProductContext } from "../Contexts/ProductContext";
import { useNavigate } from "react-router-dom";

const UpdateForm = () => {
	const { id }:any = useParams()
	let navigate = useNavigate();
	const { product, setProduct, update, get } = React.useContext(
		ProductContext
	) as IProductContext;

	useEffect(() => {
			get(id);
		}, []);

	return (
		<>
			<h3> Update Product</h3>
			<form onSubmit={update} className='form-theme'>
				<input type='hidden' value={product.articleNumber} />
				<input
					id='ProductName'
					value={product.name}
					onChange={(e) => setProduct({ ...product, name: e.target.value })}
					type='text'
					placeholder={product.name || "Product Name"}
				/>
				<input
					id='Tag'
					value={product.tag}
					onChange={(e) => setProduct({ ...product, tag: e.target.value })}
					type='text'
					placeholder={product.tag || "Tag"}
				/>
				<input
					id='Category'
					value={product.category}
					onChange={(e) => setProduct({ ...product, category: e.target.value })}
					type='text'
					placeholder={product.category || "Category"}
				/>
				<input
					id='Description'
					value={product.description}
					onChange={(e) =>
						setProduct({ ...product, description: e.target.value })
					}
					type='text'
					placeholder={product.description || "Description"}
				/>

				<input
					id='Price'
					value={product.price}
					onChange={(e) =>
						setProduct({ ...product, price: parseInt(e.target.value) })
					}
					type='number'
					min='1'
					placeholder='Price..'
				/>
				<input
					id='Rating'
					value={product.rating}
					onChange={(e) =>
						setProduct({ ...product, rating: parseInt(e.target.value) })
					}
					type='number'
					min='1'
					max='5'
					placeholder='Rating..'
				/>
				<input
					id='ImageName'
					value={product.imageName}
					onChange={(e) =>
						setProduct({ ...product, imageName: e.target.value })
					}
					type='text'
					placeholder={product.imageName || "Image URL"}
				/>

				<button
					type='submit'
					className='btn-theme'
					onClick={(e) => navigate(-1)}
				>
					Update Product
				</button>
			</form>
		</>
	);
};
export default UpdateForm;
