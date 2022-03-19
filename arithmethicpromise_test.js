
const chai = require("chai") ;
const expect = chai.expect ;

const arithmethicpromise = require("./arithmethicpromise")




      describe("async arithmethic test" , ()=>{


          // we can consuct series of it function test


          it("add two number asynchronously", async()=>{


              // arrange 

              const num1 = 30 ;
              const num2 = 45 ;
              const expectedResult = 75 ;
              var actualResult  ;



              //act

              actualResult =  await arithmethicpromise.add(num1, num2) ;

           
              // assert

              expect(expectedResult).to.be.equal(actualResult) ;


          })







      })

