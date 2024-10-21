let userek = [
    {username:'zita', password:'kiscica'},
    {username:'béla', password:'lapát'},
    {username:'anna', password:'kanna'},

    
]

function belepes() {
    //console.log('teszt')
    let felh = document.getElementById('login_felh').value
    let jelsz = document.getElementById('login_jelszo').value

    if (!(felh && jelsz)){
        alert("Nem adtál meg adatokat!")
        return
    }

/* 
   let idx =-1
    for(let i = 0; i<userek.length; i++){
        if(userek[i]['username']== felh){
            idx=i
        }
    } */

    let idx = userek.findIndex((user)=>user.username == felh && user.password == jelsz)
        if(idx ==-1){
            alert('nincs ilyen user')
            return
        }
        alert('sikeres belépés')

/*     if(idx==-1){
        alert('nincs ilyen user')
        }
        else{
            //alert('megvan a user')
            if(jelsz == userek[idx].password)
            {
                alert('sikeres belépés')
        }else 
            {
                alert('Hibás jelszó')
            }
            }
*/          
}

function regisztral() {
    let felh = document.getElementById('reg_felh').value
    let jelsz = document.getElementById('reg_jelszo').value

    if (!(felh && jelsz)){
        alert("Nem adtál meg adatokat!")
        return
    }
    
    let idx = userek.findIndex((user)=>user.username == felh)
        if(idx ==-1){
            userek.push({username:felh, password:jelsz})
            alert('Sikeres regisztráció!')
            return
        }
        alert('Ez a felhasználónév már foglalt!')
}