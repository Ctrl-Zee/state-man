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
} from '@ngneat/elf-entities';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/shared/models/cart-item';

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

  selectDataEntities(): Observable<CartItem[]> {
    return this.data$;
  }

  selectAllEntities(): Observable<CartItem[]> {
    return this.store.pipe(selectAllEntities());
  }

  getEntityAsObject(id: string): CartItem | undefined {
    return this.store.query(getEntity(id));
  }

  selectEntity(id: string): Observable<CartItem | undefined> {
    return this.store.pipe(selectEntity(id));
  }

  getAllEntitiesAsObjects(): CartItem[] {
    return this.store.query(getAllEntities());
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
