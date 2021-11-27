type PageError = {
	status: number;
	message: string;
};

export type CommonPageProps<T> = { error: PageError } | T;
