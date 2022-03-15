//Swap Two Variables in One Line
#include<iostream>
main(int argc,char** argv)
{
    int x=10,y=20;
    (x^=y),(y^=x),(x^=y);
    std::cout<<"After Swap Value \nx="<<x<<"\ny="<<y<<std::endl;
}
