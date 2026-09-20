export const openGraph = {
	author: "simon-sj",
	defaultDescription: "a guy.",
	defaultImage: "/assets/open-graph.webp",
	home: {
		pageTitle: "simon / home",
		title: "simon's homepage",
		description: null,
		image: null,
	},
	//blog: {
	//	pageTitle: "simon / blog",
	//	title: "nasimono's blog",
	//	postTitlePrefix: "simon / ",
	//	description: null,
	//	image: null,
	//},
	projects: {
		pageTitle: "simon / projects",
		title: "simon's projects",
		postTitlePrefix: "simon / ",
		description: null,
		image: null,
	},
	contactme: {
		pageTitle: "simon / cantact-me",
		title: "cantact-me",
		postTitlePrefix: "simon / ",
		description: null,
		image: null,
	},
	contact: {
		pageTitle: "simon / contact me",
		title: "contact simon",
		description: "send me a message.",
		image: null,
	},
};

// contact form -> cloudflare worker -> discord webhook
export const contact = {
	workerUrl: "https://portfolio.simon-899.workers.dev/",
	// limits are kept under discord's embed limits (title 256, description 4096, field 1024)
	maxSubjectLength: 100,
	maxMessageLength: 2000,
	maxReplyLength: 200,
};

export const giscus = {
	enabled: false,
	repository: "",
	repositoryId: "",
	category: "",
	categoryId: "",
	mapping: "specific",
	strict: true,
	reactionsEnabled: true,
	emitMetadata: false,
	inputPosition: "top",
	theme: "catppuccin_mocha",
	lang: "en"
}

export const profile = [
	{
		"id": "name",
		"text": "simon",
		"icon": "lucide/user",
	},
	{
		"id": "gender",
		"text": "he/him",
		"icon": "lucide/venus-and-mars",
	},
	{
		"id": "age",
		"text": "?? years old",
		"icon": "lucide/cake",
	},
	{
		"id": "language",
		"text": "english, danish",
		"icon": "lucide/languages",
	},
	{
		"id": "location",
		"text": "denmark",
		"icon": "lucide/map-pin",
	},
];

export const socials = [
	{
		"text": ".simonsj",
		"link": "https://discordapp.com/users/595524051208765442",
		"icon": "simple-icons/discord",
		"copy": ".simonsj",
	},
	{
		"text": "github",
		"link": "https://github.com/Simon-SJ",
		"icon": "simple-icons/github",
	},
	{
		"text": "youtube",
		"link": "https://www.youtube.com/@simonsssj",
		"icon": "simple-icons/youtube",
	},
	// {
	// 	"text": "itch.io",
	// 	"link": "https://naokoaf.itch.io/",
	// 	"icon": "simple-icons/itchdotio",
	// },
	// {
	// 	"text": "osu!",
	// 	"link": "https://osu.ppy.sh/users/14661163",
	// 	"icon": "simple-icons/osu",
	// },
	{
		"text": "s@evt.dk",
		"link": "mailto:s@evt.dk",
		"icon": "lucide/mail",
		"copy": "s@evt.dk",
	},
];
