import React from "react";
import { IProductContext, ProductContext } from "../Contexts/ProductContext";

const CreateForm = () => {
	const { productRequest, setProductRequest, create } = React.useContext(
		ProductContext
	) as IProductContext;
	return (
		<>
			<h3> Create Product</h3>
			<form onSubmit={create} className='form-theme'>
				<input
					id='reqProductName'
					value={productRequest.name}
					onChange={(e) =>
						setProductRequest({ ...productRequest, name: e.target.value })
					}
					type='text'
					placeholder='Enter product name'
				/>

				<input
					id='reqTag'
					value={productRequest.tag}
					onChange={(e) =>
						setProductRequest({ ...productRequest, tag: e.target.value })
					}
					type='text'
					placeholder='Enter a tag'
				/>

				<input
					id='reqCategory'
					value={productRequest.category}
					onChange={(e) =>
						setProductRequest({ ...productRequest, category: e.target.value })
					}
					type='text'
					placeholder='Enter category name'
				/>

				<input
					id='reqDescription'
					value={productRequest.description}
					onChange={(e) =>
						setProductRequest({
							...productRequest,
							description: e.target.value,
						})
					}
					type='text'
					placeholder='Enter description'
				/>
				<input
					id='reqPrice'
					value={productRequest.price || ""}
					onChange={(e) =>
						setProductRequest({
							...productRequest,
							price: parseInt(e.target.value),
						})
					}
					type='number'
					placeholder='Enter price'
				/>
				<input
					id='reqRating'
					value={productRequest.rating || ""}
					onChange={(e) =>
						setProductRequest({
							...productRequest,
							rating: parseInt(e.target.value),
						})
					}
					type='number'
					placeholder='Enter rating 1-5'
					min='1'
					max='5'
				/>
				<input
					id='reqImageName'
					value={productRequest.imageName}
					onChange={(e) =>
						setProductRequest({
							...productRequest,
							imageName: e.target.value,
						})
					}
					type='text'
					placeholder='Enter image URL'
				/>
				<button type='submit' className='btn-theme'>
					Create Product
				</button>
			</form>
		</>
	);
};
export default CreateForm;
