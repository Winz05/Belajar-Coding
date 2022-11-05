// Let & Const ---> Mengenal scope
//             ---> Variable yg di Declare di outside scope, dia dapat diakses di inside scope
//             ---> Variable yg di Declare di inside scope, tidak bisa diakses di outside scope

let number1 = 100 
{
    let number = 10
    {
        console.log(number) // Mengakses dari inside scope = 10
        console.log(number1) // Mengakses dari outside scope = 100 
    }
}