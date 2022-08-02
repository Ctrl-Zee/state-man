import { Injectable } from '@angular/core';
import { createStore } from '@ngneat/elf';
import {
  withEntities,
  selectAllEntities,
  selectEntity,
  getEntity,
  getAllEntities,
  addEntities,
  updateEntities,
  upsertEntities,
  deleteEntities,
  getAllEntitiesApply,
  selectAllEntitiesApply,
} from '@ngneat/elf-entities';
import { map, Observable, of, reduce } from 'rxjs';
import { CartItem } from 'src/app/shared/models/cart-item';

import { Book } from 'src/app/shared/models/book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // create store
  private store = createStore({ name: 'cart' }, withEntities<CartItem>());

  // set store observable
  private store$ = this.store.asObservable();

  // get cart items from store
  private data$ = this.store$.pipe(selectAllEntities());

  constructor() {}

  getDataEntities(): Observable<CartItem[]> {
    return this.data$;
  }

  getEntityAsObject(id: string): CartItem | undefined {
    return this.store.query(getEntity(id));
  }

  getAllEntitiesAsObjects(): CartItem[] {
    return this.store.query(getAllEntities());
  }

  getEntity(id: string): Observable<CartItem | undefined> {
    return this.store.pipe(selectEntity(id));
  }

  getAllEntities(): Observable<CartItem[]> {
    return this.store.pipe(selectAllEntities());
  }

  addEntity(item: CartItem, prepend = true): void {
    this.store.update(addEntities(item, { prepend: prepend }));
  }

  addEntities(items: CartItem[], prepend = true): void {
    this.store.update(addEntities(items, { prepend: prepend }));
  }

  updateEntity(item: CartItem): void {
    this.store.update(updateEntities(item.id, (entity) => ({ ...entity })));
  }

  upsertEntity(item: CartItem): void {
    this.store.update(upsertEntities({ ...item }));
  }

  deleteEntityById(id: string): void {
    this.store.update(deleteEntities(id));
  }

  deleteEntity(item: CartItem): void {
    this.store.update(deleteEntities(item.id));
  }

  filterEntitiesByTitle(title: string): CartItem[] {
    return this.store.query(
      getAllEntitiesApply({
        filterEntity: (e) => e.book.title === title,
      })
    );
  }
}
