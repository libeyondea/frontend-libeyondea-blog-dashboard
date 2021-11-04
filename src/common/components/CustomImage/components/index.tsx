const CustomImageComponent: React.FC<any> = ({ src, alt, className, ...props }) => (
	<img {...props} src={src} alt={alt} className={className} />
);

export default CustomImageComponent;
