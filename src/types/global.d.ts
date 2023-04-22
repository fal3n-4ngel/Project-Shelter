export {}

declare global {
	interface Window {
		ethereum: ExternalProvider | JsonRpcFetchFunc;
	}
}