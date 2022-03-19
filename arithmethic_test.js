
 const chai = require("chai") ;
 const expect =  chai.expect ;

 const arithmethic = require("./arithmethic") ;




  describe('arithmethic test' , ()=>{

    
     it("it should add two numbers" ,()=>{

       const num1 = 20 ;
       const num2 = 40 ;
       const expectedResult =  60 ;

        var actualResult ;


        actualResult =  arithmethic.add(num1 , num2) ;

        expect(actualResult).to.be.equal(expectedResult) ;




        it("should subtract two numbers", ()=>{

             // act

           const num1 = 60 ;
           const num2 = 10 ;
            const expectedResult = 50 ;

            var actualResult ;


            actualResult = arithmethic.sub(num1,num2) ;
            expect(actualResult).to.be.equal(expectedResult) ;


        })



     })




  })