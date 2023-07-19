import Link from "next/link";
import TitleTooltip from "../common/TitleTooltip";
import Image from "next/image";

const SingleRecipe = ({ recipe }) => {
  return (
    <div className="mt-6 mb-10">
      {/* <div className="flex justify-center"> */}
      <h2 className="text-center">Single Recipe View</h2>
      {/* <span>
          <TitleTooltip tooltipText={"Click title for full recipe"} />
        </span>
      </div> */}

      <div className=" flex flex-col bg-gradient-to-t from-orange-100 to-red-100 shadow-lg rounded-md w-64 h-80 overflow-scroll">
        {recipe ? (
          <>
            <div className="flex items-center">
              {/* <Image
                className="w-32 h-32 rounded-md"
                src={recipe.image}
                alt="A picture of the selected recipe"
              /> */}
              <img
                className="w-32 h-32 rounded-md"
                src={recipe.image}
                alt="A picture of the selected recipe"
              />
              <div className="px-2">
                <Link
                  href={recipe.url}
                  target="_blank"
                  className="text-slate-600 font-semibold"
                >
                  {recipe.label}
                </Link>
              </div>
            </div>
            <div className="my-2 px-4">
              <h2 className="text-slate-600 underline font-light">
                Ingredients
              </h2>
              {recipe.ingredientLines.map((line) => (
                <p key={line.id} className="text-sm text-slate-600">
                  {line}
                </p>
              ))}
            </div>
          </>
        ) : (
          <h2 className="text-center my-auto cursor-default text-slate-600">
            No recipe selected
          </h2>
        )}
      </div>
    </div>
  );
};

export default SingleRecipe;

// "recipe": {
//     "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_05eb8a3436c2c252a4c0225e57657188",
//     "label": "Easy Vegetable Chow Mein",
//     "image": "https://edamam-product-images.s3.amazonaws.com/web-img/791/791a00c215aeea18c4d37f475dc008db.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLWVhc3QtMSJHMEUCIC43RIRQnHQXK2BAjyhxRQB7Rg65UsbgYQxt1oObEci9AiEA2Sy%2BNkOQgN6HNKUh510Pr8b2yDduhIeUXTiO5n5hh%2FgquQUIZxAAGgwxODcwMTcxNTA5ODYiDEkcB1%2BaDAupyRbtuSqWBTSFDzjeXQ1r1%2FCCib%2B3GsO6xJrcaQ6pVvwoamICBfiCYgkt059oRCxOaqr%2FRVHMtzsGn0hol2WXKAltacTj58xUfLSvQb2QEpQUblGWjoOdkog3GGFz4G5BBAz7VY6%2FcyS6%2BxIyzDFG6aPqkMAN0lhOe%2BL%2BgyRWTauvUKtAVPIcO%2FhMJ5%2Bv2SMtPJoz%2FImSWLKv5bgLu7vJMVAJ0jvoWGYUtmjct4Qf8Ed0wpsOD9dewxoPXw1BTOZ2aaMrXg2q4TV%2F8zjR0ReQB7l6CAYY%2FLGEsZoHO73QL7LPry4K6yRnAZbIWGaC%2BIROK0voarCOkqduznqhb0es9D6CTUJVnJqzzD0awn%2B5yMU%2F2YWDDWDdUDLA7ssUHwFhR1pSvFDlPPL76obhjpWtsuBEn8LePoEyv3NvBmFOtcNSJEHGrFVPtQzh5OWapzwBSkKqF457HWjhvEgorCuWCJXgYJtcp9WAaPMj76tWLVceN6MIbjT%2FqlfIrNtwMFQ52QZqPl%2BuRHj38AzsW%2FXSYKW7XKeXJKYnYooC2aufidzU0NH5nm5WeDHMpOG97JdxxbXbCOKmcumd4FQ6Z8iSer%2BcD7YSeoBef5iKv7wFauLCsuPLbiR3AyfbZ4w%2FvZ6KkRDyStJaNl08hp4xzxfI940cBL9DOSsIR%2BnHLkhgOdPJxkqJIBHbcqe%2Fqyh1GqWEC%2BWzvbzZB8OGbS1X%2FdBE5pF8fxUFgi6JWVLAxoWweQmAa2jPMAAz%2B%2F2WcyPnw2SrsBX8%2FL%2F8pl%2BEEWmKQ2YoLDtL6sk9T0aSKahd8mSr%2F%2FICNguINiQKXX6KqmQEvFFk79XCTpn%2FcqDDJIE3osSw9lp9vc31cwZOT5c23%2B9XDIkqeQKl%2BcSck2GwRNYDMKzRuKQGOrEBsaq%2FrQGr5UXWZEt07oXFXUUDiF60EDpF7DMU55AFOa4hriIZk85r4fpJD%2BeEJdHvMH4ImXihBX%2BS9BNrfWQrbhd8ep2MfOQaxiB13NgzNo37BBWdefxOiOamdIKVk01c5iWRsrW06XBBr845J%2FIrr6jqmI0DN%2B%2B8E6HTROLV%2B0kpMP7UD1xoUtqMtENHitRPPuIgNiGk6G95sxulpgID0w%2BoytUokgXmRTmoAE0v53gQ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230617T221818Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFN4WVT37W%2F20230617%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e6e3afe99cc6c8aa3e25b347ffb409b8bad17a17ccc8a691070de05b4c613a28",
//     "images": {
//       "THUMBNAIL": {
//         "url": "https://edamam-product-images.s3.amazonaws.com/web-img/791/791a00c215aeea18c4d37f475dc008db-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLWVhc3QtMSJHMEUCIC43RIRQnHQXK2BAjyhxRQB7Rg65UsbgYQxt1oObEci9AiEA2Sy%2BNkOQgN6HNKUh510Pr8b2yDduhIeUXTiO5n5hh%2FgquQUIZxAAGgwxODcwMTcxNTA5ODYiDEkcB1%2BaDAupyRbtuSqWBTSFDzjeXQ1r1%2FCCib%2B3GsO6xJrcaQ6pVvwoamICBfiCYgkt059oRCxOaqr%2FRVHMtzsGn0hol2WXKAltacTj58xUfLSvQb2QEpQUblGWjoOdkog3GGFz4G5BBAz7VY6%2FcyS6%2BxIyzDFG6aPqkMAN0lhOe%2BL%2BgyRWTauvUKtAVPIcO%2FhMJ5%2Bv2SMtPJoz%2FImSWLKv5bgLu7vJMVAJ0jvoWGYUtmjct4Qf8Ed0wpsOD9dewxoPXw1BTOZ2aaMrXg2q4TV%2F8zjR0ReQB7l6CAYY%2FLGEsZoHO73QL7LPry4K6yRnAZbIWGaC%2BIROK0voarCOkqduznqhb0es9D6CTUJVnJqzzD0awn%2B5yMU%2F2YWDDWDdUDLA7ssUHwFhR1pSvFDlPPL76obhjpWtsuBEn8LePoEyv3NvBmFOtcNSJEHGrFVPtQzh5OWapzwBSkKqF457HWjhvEgorCuWCJXgYJtcp9WAaPMj76tWLVceN6MIbjT%2FqlfIrNtwMFQ52QZqPl%2BuRHj38AzsW%2FXSYKW7XKeXJKYnYooC2aufidzU0NH5nm5WeDHMpOG97JdxxbXbCOKmcumd4FQ6Z8iSer%2BcD7YSeoBef5iKv7wFauLCsuPLbiR3AyfbZ4w%2FvZ6KkRDyStJaNl08hp4xzxfI940cBL9DOSsIR%2BnHLkhgOdPJxkqJIBHbcqe%2Fqyh1GqWEC%2BWzvbzZB8OGbS1X%2FdBE5pF8fxUFgi6JWVLAxoWweQmAa2jPMAAz%2B%2F2WcyPnw2SrsBX8%2FL%2F8pl%2BEEWmKQ2YoLDtL6sk9T0aSKahd8mSr%2F%2FICNguINiQKXX6KqmQEvFFk79XCTpn%2FcqDDJIE3osSw9lp9vc31cwZOT5c23%2B9XDIkqeQKl%2BcSck2GwRNYDMKzRuKQGOrEBsaq%2FrQGr5UXWZEt07oXFXUUDiF60EDpF7DMU55AFOa4hriIZk85r4fpJD%2BeEJdHvMH4ImXihBX%2BS9BNrfWQrbhd8ep2MfOQaxiB13NgzNo37BBWdefxOiOamdIKVk01c5iWRsrW06XBBr845J%2FIrr6jqmI0DN%2B%2B8E6HTROLV%2B0kpMP7UD1xoUtqMtENHitRPPuIgNiGk6G95sxulpgID0w%2BoytUokgXmRTmoAE0v53gQ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230617T221818Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFN4WVT37W%2F20230617%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8c27f17f483c6c4edb888cea9997617086a2c584b5116d675388803b0119140a",
//         "width": 100,
//         "height": 100
//       },
//       "SMALL": {
//         "url": "https://edamam-product-images.s3.amazonaws.com/web-img/791/791a00c215aeea18c4d37f475dc008db-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLWVhc3QtMSJHMEUCIC43RIRQnHQXK2BAjyhxRQB7Rg65UsbgYQxt1oObEci9AiEA2Sy%2BNkOQgN6HNKUh510Pr8b2yDduhIeUXTiO5n5hh%2FgquQUIZxAAGgwxODcwMTcxNTA5ODYiDEkcB1%2BaDAupyRbtuSqWBTSFDzjeXQ1r1%2FCCib%2B3GsO6xJrcaQ6pVvwoamICBfiCYgkt059oRCxOaqr%2FRVHMtzsGn0hol2WXKAltacTj58xUfLSvQb2QEpQUblGWjoOdkog3GGFz4G5BBAz7VY6%2FcyS6%2BxIyzDFG6aPqkMAN0lhOe%2BL%2BgyRWTauvUKtAVPIcO%2FhMJ5%2Bv2SMtPJoz%2FImSWLKv5bgLu7vJMVAJ0jvoWGYUtmjct4Qf8Ed0wpsOD9dewxoPXw1BTOZ2aaMrXg2q4TV%2F8zjR0ReQB7l6CAYY%2FLGEsZoHO73QL7LPry4K6yRnAZbIWGaC%2BIROK0voarCOkqduznqhb0es9D6CTUJVnJqzzD0awn%2B5yMU%2F2YWDDWDdUDLA7ssUHwFhR1pSvFDlPPL76obhjpWtsuBEn8LePoEyv3NvBmFOtcNSJEHGrFVPtQzh5OWapzwBSkKqF457HWjhvEgorCuWCJXgYJtcp9WAaPMj76tWLVceN6MIbjT%2FqlfIrNtwMFQ52QZqPl%2BuRHj38AzsW%2FXSYKW7XKeXJKYnYooC2aufidzU0NH5nm5WeDHMpOG97JdxxbXbCOKmcumd4FQ6Z8iSer%2BcD7YSeoBef5iKv7wFauLCsuPLbiR3AyfbZ4w%2FvZ6KkRDyStJaNl08hp4xzxfI940cBL9DOSsIR%2BnHLkhgOdPJxkqJIBHbcqe%2Fqyh1GqWEC%2BWzvbzZB8OGbS1X%2FdBE5pF8fxUFgi6JWVLAxoWweQmAa2jPMAAz%2B%2F2WcyPnw2SrsBX8%2FL%2F8pl%2BEEWmKQ2YoLDtL6sk9T0aSKahd8mSr%2F%2FICNguINiQKXX6KqmQEvFFk79XCTpn%2FcqDDJIE3osSw9lp9vc31cwZOT5c23%2B9XDIkqeQKl%2BcSck2GwRNYDMKzRuKQGOrEBsaq%2FrQGr5UXWZEt07oXFXUUDiF60EDpF7DMU55AFOa4hriIZk85r4fpJD%2BeEJdHvMH4ImXihBX%2BS9BNrfWQrbhd8ep2MfOQaxiB13NgzNo37BBWdefxOiOamdIKVk01c5iWRsrW06XBBr845J%2FIrr6jqmI0DN%2B%2B8E6HTROLV%2B0kpMP7UD1xoUtqMtENHitRPPuIgNiGk6G95sxulpgID0w%2BoytUokgXmRTmoAE0v53gQ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230617T221818Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFN4WVT37W%2F20230617%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c6510075e8edd99126f2ebd7b07585971f80bc12daed057decb77d21861a14ad",
//         "width": 200,
//         "height": 200
//       },
//       "REGULAR": {
//         "url": "https://edamam-product-images.s3.amazonaws.com/web-img/791/791a00c215aeea18c4d37f475dc008db.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLWVhc3QtMSJHMEUCIC43RIRQnHQXK2BAjyhxRQB7Rg65UsbgYQxt1oObEci9AiEA2Sy%2BNkOQgN6HNKUh510Pr8b2yDduhIeUXTiO5n5hh%2FgquQUIZxAAGgwxODcwMTcxNTA5ODYiDEkcB1%2BaDAupyRbtuSqWBTSFDzjeXQ1r1%2FCCib%2B3GsO6xJrcaQ6pVvwoamICBfiCYgkt059oRCxOaqr%2FRVHMtzsGn0hol2WXKAltacTj58xUfLSvQb2QEpQUblGWjoOdkog3GGFz4G5BBAz7VY6%2FcyS6%2BxIyzDFG6aPqkMAN0lhOe%2BL%2BgyRWTauvUKtAVPIcO%2FhMJ5%2Bv2SMtPJoz%2FImSWLKv5bgLu7vJMVAJ0jvoWGYUtmjct4Qf8Ed0wpsOD9dewxoPXw1BTOZ2aaMrXg2q4TV%2F8zjR0ReQB7l6CAYY%2FLGEsZoHO73QL7LPry4K6yRnAZbIWGaC%2BIROK0voarCOkqduznqhb0es9D6CTUJVnJqzzD0awn%2B5yMU%2F2YWDDWDdUDLA7ssUHwFhR1pSvFDlPPL76obhjpWtsuBEn8LePoEyv3NvBmFOtcNSJEHGrFVPtQzh5OWapzwBSkKqF457HWjhvEgorCuWCJXgYJtcp9WAaPMj76tWLVceN6MIbjT%2FqlfIrNtwMFQ52QZqPl%2BuRHj38AzsW%2FXSYKW7XKeXJKYnYooC2aufidzU0NH5nm5WeDHMpOG97JdxxbXbCOKmcumd4FQ6Z8iSer%2BcD7YSeoBef5iKv7wFauLCsuPLbiR3AyfbZ4w%2FvZ6KkRDyStJaNl08hp4xzxfI940cBL9DOSsIR%2BnHLkhgOdPJxkqJIBHbcqe%2Fqyh1GqWEC%2BWzvbzZB8OGbS1X%2FdBE5pF8fxUFgi6JWVLAxoWweQmAa2jPMAAz%2B%2F2WcyPnw2SrsBX8%2FL%2F8pl%2BEEWmKQ2YoLDtL6sk9T0aSKahd8mSr%2F%2FICNguINiQKXX6KqmQEvFFk79XCTpn%2FcqDDJIE3osSw9lp9vc31cwZOT5c23%2B9XDIkqeQKl%2BcSck2GwRNYDMKzRuKQGOrEBsaq%2FrQGr5UXWZEt07oXFXUUDiF60EDpF7DMU55AFOa4hriIZk85r4fpJD%2BeEJdHvMH4ImXihBX%2BS9BNrfWQrbhd8ep2MfOQaxiB13NgzNo37BBWdefxOiOamdIKVk01c5iWRsrW06XBBr845J%2FIrr6jqmI0DN%2B%2B8E6HTROLV%2B0kpMP7UD1xoUtqMtENHitRPPuIgNiGk6G95sxulpgID0w%2BoytUokgXmRTmoAE0v53gQ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230617T221818Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFN4WVT37W%2F20230617%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e6e3afe99cc6c8aa3e25b347ffb409b8bad17a17ccc8a691070de05b4c613a28",
//         "width": 300,
//         "height": 300
//       },
//       "LARGE": {
//         "url": "https://edamam-product-images.s3.amazonaws.com/web-img/791/791a00c215aeea18c4d37f475dc008db-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLWVhc3QtMSJHMEUCIC43RIRQnHQXK2BAjyhxRQB7Rg65UsbgYQxt1oObEci9AiEA2Sy%2BNkOQgN6HNKUh510Pr8b2yDduhIeUXTiO5n5hh%2FgquQUIZxAAGgwxODcwMTcxNTA5ODYiDEkcB1%2BaDAupyRbtuSqWBTSFDzjeXQ1r1%2FCCib%2B3GsO6xJrcaQ6pVvwoamICBfiCYgkt059oRCxOaqr%2FRVHMtzsGn0hol2WXKAltacTj58xUfLSvQb2QEpQUblGWjoOdkog3GGFz4G5BBAz7VY6%2FcyS6%2BxIyzDFG6aPqkMAN0lhOe%2BL%2BgyRWTauvUKtAVPIcO%2FhMJ5%2Bv2SMtPJoz%2FImSWLKv5bgLu7vJMVAJ0jvoWGYUtmjct4Qf8Ed0wpsOD9dewxoPXw1BTOZ2aaMrXg2q4TV%2F8zjR0ReQB7l6CAYY%2FLGEsZoHO73QL7LPry4K6yRnAZbIWGaC%2BIROK0voarCOkqduznqhb0es9D6CTUJVnJqzzD0awn%2B5yMU%2F2YWDDWDdUDLA7ssUHwFhR1pSvFDlPPL76obhjpWtsuBEn8LePoEyv3NvBmFOtcNSJEHGrFVPtQzh5OWapzwBSkKqF457HWjhvEgorCuWCJXgYJtcp9WAaPMj76tWLVceN6MIbjT%2FqlfIrNtwMFQ52QZqPl%2BuRHj38AzsW%2FXSYKW7XKeXJKYnYooC2aufidzU0NH5nm5WeDHMpOG97JdxxbXbCOKmcumd4FQ6Z8iSer%2BcD7YSeoBef5iKv7wFauLCsuPLbiR3AyfbZ4w%2FvZ6KkRDyStJaNl08hp4xzxfI940cBL9DOSsIR%2BnHLkhgOdPJxkqJIBHbcqe%2Fqyh1GqWEC%2BWzvbzZB8OGbS1X%2FdBE5pF8fxUFgi6JWVLAxoWweQmAa2jPMAAz%2B%2F2WcyPnw2SrsBX8%2FL%2F8pl%2BEEWmKQ2YoLDtL6sk9T0aSKahd8mSr%2F%2FICNguINiQKXX6KqmQEvFFk79XCTpn%2FcqDDJIE3osSw9lp9vc31cwZOT5c23%2B9XDIkqeQKl%2BcSck2GwRNYDMKzRuKQGOrEBsaq%2FrQGr5UXWZEt07oXFXUUDiF60EDpF7DMU55AFOa4hriIZk85r4fpJD%2BeEJdHvMH4ImXihBX%2BS9BNrfWQrbhd8ep2MfOQaxiB13NgzNo37BBWdefxOiOamdIKVk01c5iWRsrW06XBBr845J%2FIrr6jqmI0DN%2B%2B8E6HTROLV%2B0kpMP7UD1xoUtqMtENHitRPPuIgNiGk6G95sxulpgID0w%2BoytUokgXmRTmoAE0v53gQ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230617T221818Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFN4WVT37W%2F20230617%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f62f0103a58e1d2457b90fd285dfbd2a124603d3ddd07d990acb5359b593a35d",
//         "width": 600,
//         "height": 600
//       }
//     },
//     "source": "Betty Crocker",
//     "url": "http://www.bettycrocker.com/recipes/easy-vegetable-chow-mein/89783a00-ed56-47f1-a4c2-356e7a1cae2c",
//     "shareAs": "http://www.edamam.com/recipe/easy-vegetable-chow-mein-05eb8a3436c2c252a4c0225e57657188/mushrooms/balanced",
//     "yield": 4,
//     "dietLabels": [
//       "Balanced",
//       "High-Fiber"
//     ],
//     "healthLabels": [
//       "Dairy-Free",
//       "Peanut-Free",
//       "Tree-Nut-Free",
//       "Soy-Free",
//       "Fish-Free",
//       "Pork-Free",
//       "Red-Meat-Free",
//       "Crustacean-Free",
//       "Celery-Free",
//       "Mustard-Free",
//       "Sesame-Free",
//       "Lupine-Free",
//       "Alcohol-Free"
//     ],
//     "cautions": [
//       "Gluten",
//       "Wheat",
//       "Soy",
//       "Sulfites"
//     ],
//     "ingredientLines": [
//       "1 cup vegetable broth or Progresso® chicken broth (from 32-oz carton)",
//       "2 tablespoons cornstarch",
//       "2 tablespoons oyster sauce",
//       "1/4 teaspoon red pepper sauce",
//       "2 tablespoons vegetable oil",
//       "2 garlic cloves, finely chopped",
//       "1 bag (1 lb) frozen snap peas, carrots, onions and mushrooms",
//       "2 1/2 cups coleslaw mix",
//       "4 cups chow mein noodles"
//     ],
