export class Comment {
    private  id: number;
    constructor(private  pId: number,
                private  userId: number,
                private  userName: string,
                private  content: string,
                private  date: string,
                private  rating: number) {
    }
}