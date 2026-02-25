1. getElementById() returns one element by id and is very fast. getElementsByClassName() returns a live collection of elements with a given class. querySelector() returns the first match using CSS selectors, while querySelectorAll() returns all matches as a static list.

2. To create and insert a new element into the DOM, you first use document.createElement() to make the element, then modify its content or attributes as needed, and finally insert it into the page with methods like appendChild(), append(), or prepend(), which place the element inside a chosen parent node.

3. Event bubbling is the process where an event starts on the element that triggered it and then travels upward through its parent elements in the DOM. For example, a click on a button can also trigger click handlers on its container or even the whole page. This behavior makes it possible to handle events efficiently at higher levels, and it can be stopped using event.stopPropagation() if needed.

4. Event delegation is when you add one event listener to a parent element to handle events from its child elements. It works because events bubble up the DOM. This is useful because it improves performance and also works for elements added later.

5. preventDefault() stops the browser’s default action for an event, like preventing a link from navigating or a form from submitting. stopPropagation() stops the event from bubbling up to parent elements, so other listeners higher in the DOM will not run.
