export default function runInPromisePool(params: {
    items: any[];
    concurrency: number;
    processor: any;
}): Promise<any[]>;
