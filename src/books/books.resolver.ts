import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Book } from './entities/book.entity';
import { v4 as uuidv4 } from 'uuid';

@Resolver(() => Book)
export class BooksResolver {
  private books: Book[] = [];

  @Query(() => [Book])
  getBooks(): Book[] {
    return this.books;
  }

  @Query(() => Book, { nullable: true })
  getBook(@Args('id') id: string): Book | null {
    return this.books.find(book => book.id === id) || null;
  }

  @Mutation(() => Book)
  addBook(
    @Args('title') title: string,
    @Args('author') author: string,
  ): Book {
    const newBook = { id: uuidv4(), title, author };
    this.books.push(newBook);
    return newBook;
  }
}
