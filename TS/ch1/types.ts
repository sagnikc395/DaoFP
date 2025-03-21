
// void has no constructor 
type Void = never; 

// absurd :: Void -> a equivalent in haskell

function absurd<A>(v: Void): A {
    throw new Error("Impossible: Void has no values.");
}

// Unit :: a -> () 
function unit<A>(a: A) : void {
    return;
}

// x :: Int , x = 42 in haskell
const x : number = 42; 

// y : () -> Int, y() = 42 
function y(): number {
    return 42;
}