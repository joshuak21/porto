import NextHead from 'next/head'

export interface PropsInterface {
	title: string,
	description?: string,
	url?: string,
	keyword?: string,
	type?: string,
}

export default function HeadingComponent({
	description = 'Some SEO web description',
	type = 'website',
	...props
}: PropsInterface): JSX.Element {
	return (
		<NextHead>
			<title>{props.title}</title>
			<meta charSet="utf-8"/>

			<link rel="icon" type="image/png" href="favicon.ico" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
			<meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
			<meta name="description" content={description}/>

			<meta property="og:title" content={props.title} />
			<meta property="og:type" content={type} />
			<meta property="og:description" content={description} />

			<meta property="twitter:title" content={props.title} />
			<meta property="twitter:description" content={description} />
		</NextHead>
	)
}