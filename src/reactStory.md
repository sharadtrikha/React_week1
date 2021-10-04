


React ->

Component (written in jsx) -> Transform it via React.createElement -> Javascript object

Suppose 3 components made in React -> x,y,z (3 js objects)

x -> parent
y,z -> child
-------------------------------------------
Virtual Dom -> 

    x (js obj)
        y (js obj)
        z (js obj)

-------------------------------------------

ReactDom -> (to keep virutal dom in sync with Dom)

Looks at your virtual dom and cordinates/works with actual dom
Finally it will be painted on screen.




-----------------------------------

State 

What is state ?
State -> UI snapshot at particular time.

useState hooks



----------------------------------

React says you don't update state variable by yourself. React will manage for us.
How ?
Api -> useState


---------
    <div>
      <button id="click" onClick={onClickHandler}>
        Click me to show paragraph
      </button>
      
    </div>

   X =   React.createElement(......)

   After clicking (useState method called) --->

    <div>
      <button id="click" onClick={onClickHandler}>
        Click me to show paragraph
      </button>
              <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
    </div>

    Y = React.createElement()

    X and Y -> these js objects

    Compare X and Y js objects (React lib.)
    ->

    whether there is a diff. or not ? (react lib.) -> REACT DIFFING ALGORITHM

    if Diff. is present ? 
    -> react compares prev. snapshot(virtual dom) and current 1.
    -> React lib Tell reactDom lib. that there is a change to be done in actual dom.

    Finally, ReactDom does this change for us i.e it makes sure that virtual dom and dom are in sync (reconcilaliton)




    --------

    Diff. between Re-evaluate and re-render ?
    Parent State change, then, all child will get re-evaluate ?
    reat.memo -> perf. optimization ?
    useEffect ? 

    Component lifecycle :
    1. Mount - useEffect(() => {}, [])
    2. Update - useEffect(() => {}, [<var1>, <var2>])
    3. unmount - useEffect(() => { return () => {........} }, [])


