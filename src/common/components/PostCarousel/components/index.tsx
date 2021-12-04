import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import classNames from 'classnames';
import ImageComponent from 'common/components/Image/components';
import { useState } from 'react';

const PostCarouselComponent = () => {
	const images = [
		{
			url: 'https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
			alt: '1'
		},
		{
			url: 'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
			alt: '2'
		},
		{
			url: 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
			alt: '3'
		},
		{
			url: 'https://instagram.fsgn2-5.fna.fbcdn.net/v/t51.2885-15/e35/262506364_1535965313469206_5394375443067181698_n.jpg?_nc_ht=instagram.fsgn2-5.fna.fbcdn.net&_nc_cat=102&_nc_ohc=lu5RHS_SwDMAX_Ruza8&edm=AIQHJ4wBAAAA&ccb=7-4&oh=6c6b5bf08ca59e3c02fdf07cfb505b40&oe=61B11075&_nc_sid=7b02f1&ig_cache_key=MjcxNjk1MTQ1MDgwMTgxNzIwMQ%3D%3D.2-ccb7-4',
			alt: '4'
		}
	];

	const [currentImageIdx, setCurrentImagIdx] = useState(0);

	const prevSlide = () => {
		// find out whether currentImageIdx eqals 0 and thus user reached beginning of carousel
		const resetToVeryBack = currentImageIdx === 0;

		const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1;

		// assign the logical index to current image index that will be used in render method
		setCurrentImagIdx(index);
	};

	const nextSlide = () => {
		// check if we need to start over from the first index
		const resetIndex = currentImageIdx === images.length - 1;

		const index = resetIndex ? 0 : currentImageIdx + 1;

		// assign the logical index to current image index that will be used in render method
		setCurrentImagIdx(index);
	};

	// create a new array with 5 elements from the source images
	const activeImageSourcesFromState = images.slice(currentImageIdx, currentImageIdx + 3);

	// check the length of the new array (it’s less than 5 when index is at the end of the imagge sources array)
	const imageSourcesToDisplay =
		activeImageSourcesFromState.length < 3
			? // if the imageSourcesToDisplay's length is lower than 5 images than append missing images from the beginning of the original array
			  [...activeImageSourcesFromState, ...images.slice(0, 3 - activeImageSourcesFromState.length)]
			: activeImageSourcesFromState;

	return (
		<div>
			<div className="relative">
				{imageSourcesToDisplay.map((image, index) => (
					<ImageComponent
						src={image.url}
						alt={image.alt}
						className={classNames('max-h-96 w-full object-cover', { block: index === 2, hidden: index !== 2 })}
						key={index}
					/>
				))}
				<button type="button" onClick={prevSlide} className="top-1/2 left-0 absolute p-4 -translate-y-2/4 text-gray-200">
					<FaChevronCircleLeft className="h-6 w-6" />
				</button>
				<button type="button" onClick={nextSlide} className="top-1/2 right-0 absolute p-4 -translate-y-2/4 text-gray-200">
					<FaChevronCircleRight className="h-6 w-6" />
				</button>
			</div>
			<div className="flex justify-center mt-4 space-x-1">
				{images.map((image, index) =>
					currentImageIdx === index ? (
						<div className="rounded-full h-2 w-2 bg-blue-600" />
					) : (
						<div className="rounded-full h-2 w-2 bg-gray-300" />
					)
				)}
			</div>
		</div>
	);
};

export default PostCarouselComponent;
