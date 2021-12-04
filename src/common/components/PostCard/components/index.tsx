import ImageComponent from 'common/components/Image/components';
import { BsBookmark, BsChat, BsHeart, BsThreeDots } from 'react-icons/bs';
import PostCarouselComponent from 'common/components/PostCarousel/components';

type Props = {};

const PostCardComponent: React.FC<Props> = () => {
	return (
		<div className="shadow-lg rounded-md bg-white w-full">
			<div className="flex items-center justify-between p-4">
				<div className="flex items-center flex-grow flex-shrink">
					<a href="#!" className="flex-none">
						<ImageComponent
							src="https://picsum.photos/seed/picsum/666/666"
							className="mx-auto rounded-full h-10 w-10"
						/>
					</a>
					<div className="flex items-center flex-grow flex-shrink ml-4 text-sm">
						<span className="text-gray-800 font-medium">
							<a href="#!" className="block relative">
								Libeyondea
							</a>
						</span>
					</div>
				</div>
				<div className="flex items-center">
					<BsThreeDots className="w-6 h-6" />
				</div>
			</div>
			<PostCarouselComponent />
			<div className="p-4">
				<div className="flex items-center justify-between mb-3">
					<div className="flex items-center">
						<BsHeart className="w-6 h-6 mr-2" />
						<BsChat className="w-6 h-6" />
					</div>
					<div className="flex items-center">
						<BsBookmark className="w-6 h-6" />
					</div>
				</div>
				<div className="flex mb-3">
					<a href="#!" className="font-medium leading-none">
						1 bình luận
					</a>
				</div>
				<div className="flex flex-col mb-3">
					<div className="flex">
						<span className="mr-1">
							<a href="#!" className="leading-none font-medium">
								Tester
							</a>
						</span>
						<span>Testerererererer</span>
					</div>
					<div className="flex">
						<a href="#!" className="text-gray-400">
							Xem binh luận
						</a>
					</div>
				</div>
				<div className="flex">
					<a href="#!" className="text-gray-400 font-light text-xs">
						<time>4 ngày trước</time>
					</a>
				</div>
			</div>
		</div>
	);
};

export default PostCardComponent;
