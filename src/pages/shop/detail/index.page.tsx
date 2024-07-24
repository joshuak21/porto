import FooterComponent, {
	PropsInterface as FooterComponentPropsInterface
} from '@/components/footer'
import HeadingComponent from '@/components/heading'
import HeaderShopComponent from '@/components/header-shop'
import ShopDetailComponent from '@/components/shop/detail'

export default function ProductDetailPage(): JSX.Element {
	const footerContents: FooterComponentPropsInterface["contents"] = [
		{
			title: "About Us",
			children: ["Our Story", "Partners"],
		},
		{
			title: "Our Service",
			children: ["30 days Money Guarantee", "Reschedule", "Refunds"],
		},
		{
			title: "Payment Method",
			children: [
				"BCA",
				"PERMATA",
				"BNI",
				"MANDIRI",
				"BNI",
				"VISA",
				"MASTERCARD",
				"OVO",
				"QRIS",
			],
		},
		{
			title: "Support",
			children: ["FAQ's", "Terms of Service", "Privacy Policy", "Contact Us"],
		},
	];

	return (<>
		<HeadingComponent title="Product Detail"/>
		<HeaderShopComponent/>
		<main>
			<ShopDetailComponent/>
		</main>
		<FooterComponent contents={footerContents} company="E-commerce"/>
	</>)
}