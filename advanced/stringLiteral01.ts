type EventNames = 'click' | 'scroll' | 'mousemove';
const handleEvent = (ele: Element, event: EventNames) => {
  // doSomething
};
handleEvent(document.getElementById('hello'), 'click');
// error argument of dbclick is not assignable to parameter of type 'EventNames'
// handleEvent(document.getElementById('world'), 'dbclick');
