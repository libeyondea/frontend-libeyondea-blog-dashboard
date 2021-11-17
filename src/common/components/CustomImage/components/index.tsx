type Props = {
	src: string;
	alt?: string;
	className?: string;
};

const CustomImageComponent: React.FC<Props> = ({ src, alt, className, ...props }) => (
	<img {...props} src={src} alt={alt} className={className} />
);

export default CustomImageComponent;
