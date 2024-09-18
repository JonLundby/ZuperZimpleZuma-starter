export default class SimpleLinkedList {
  head = null;
  tail = null;

  id = 97;

  nextId() {
    return String.fromCodePoint(this.id++);
  }

  size() {
    let count = 0;
    for(let node=this.head;node!=null;node=node.next,count++);
    return count;
  }

  add(data) {
    const node = { data: data, next: null, prev: this.tail, id: this.nextId() };
    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    return node;
  }

  remove( node ) {
    const prev = node?.prev;
    const next = node?.next;
  
    if(prev == null) {
      // this is the first node - make head point to the next one
      this.head = node.next;
      // and make the next one point back to nothing
      if(this.head)
        this.head.prev = null;
    } 
    
    if(next == null) {
      // this is the last node - make tail point to the one before
      this.tail = node.prev;
      if(this.tail)
        this.tail.next = null;
    }
  
    if(node.prev)
      node.prev.next = node.next;
    if(node.next)
      node.next.prev = node.prev;
  }


  insertBefore( data, node ) {
    const newNode = { data: data, next: node, prev: node.prev, id: this.nextId()};
    // this is before the first node - make head point to the new one
    if(this.head == node) {
      this.head = newNode;
    } else {
      node.prev.next = newNode;
    }
    node.prev = newNode;
  
    return newNode;
  }

  insertAfter( data, node ) {
    const newNode = { data: data, next: node.next, prev: node, id: this.nextId()};
    // this is after the last node - make tail point to the new one
    if(this.tail == node) {
      this.tail = newNode;
    } else {
      node.next.prev = newNode;
    }
    node.next = newNode;
  
    return newNode;
  }

}
