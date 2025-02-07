// pages/admin/inventory.jsx
import { client } from '@/sanity/lib/client';
import { FiPackage, FiAlertTriangle, FiCheckCircle, FiTag, FiGrid } from 'react-icons/fi';
import Image from 'next/image';
import { Producte } from '@/types/data';

async function getInventoryData() {
  const productsQuery = `*[_type == "products"]{
    _id,
    title,
    price,
    priceWithoutDiscount,
    badge,
    "image": image.asset->url,
    inventory,
    "category": category->title,
    description,
    tags
  }`;

  const categoriesQuery = `*[_type == "categories"]{
    _id,
    title,
    "image": image.asset->url,
    products
  }`;

  const [products, categories] = await Promise.all([
        client.fetch(productsQuery),
        client.fetch(categoriesQuery)
      ]);


      return { products, categories };
    }

export default async function InventoryPage() {
    const { products, categories } = await getInventoryData();
  const getStockStatus = (stock: number) => {
    if (stock === 0) return 'out-of-stock';
    if (stock < 10) return 'low-stock';
    return 'in-stock';
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FiPackage className="text-2xl" /> Inventory Management
      </h1>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Image</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Product</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Category</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Price</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Stock</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product:Producte) => (
              <tr key={product._id}>
                <td className="px-6 py-4">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={64}
                      height={64}
                      className="rounded-lg object-cover"
                    />
                  )}
                </td>
                <td className="px-6 py-4 font-medium">
                  <div className="flex flex-col">
                    <span>{product.title}</span>
                    {product.badge && (
                      <span className="text-xs text-blue-600 mt-1 flex items-center">
                        <FiTag className="mr-1" /> {product.badge}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">
                     {product.category || 'Uncategorized'}
                   </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-green-600">${product.price}</span>
                    {product.priceWithoutDiscount && (
                      <span className="text-sm text-gray-400 line-through">
                        ${product.priceWithoutDiscount}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="mr-2">{product.inventory}</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getStockStatus(product.inventory) === 'out-of-stock' ? 'bg-red-500' : 'bg-green-500'}`}
                        style={{ width: `${Math.min((product.inventory / 100) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {getStockStatus(product.inventory) === 'out-of-stock' && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-800">
                      <FiAlertTriangle className="mr-2" /> Out of Stock
                    </span>
                  )}
                  {getStockStatus(product.inventory) === 'low-stock' && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800">
                      <FiAlertTriangle className="mr-2" /> Low Stock
                    </span>
                  )}
                  {getStockStatus(product.inventory) === 'in-stock' && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800">
                      <FiCheckCircle className="mr-2" /> In Stock
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

            {/* Categories Section */}
            <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FiGrid className="text-2xl" /> Category Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category:Producte) => (
            <div key={category._id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                {category.image && (
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={64}
                    height={64}
                    className="rounded-lg object-cover"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                  <p className="text-gray-600 mt-1">
                    {category.products} products
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// app/(admin)/inventory/page.tsx
// import { client } from '@/sanity/lib/client';
// import { FiPackage, FiAlertTriangle, FiCheckCircle, FiTag, FiGrid } from 'react-icons/fi';
// import Image from 'next/image';
// import { Producte } from '@/types/data';

// async function getInventoryData() {
//   const productsQuery = `*[_type == "products"]{
//     _id,
//     title,
//     price,
//     priceWithoutDiscount,
//     badge,
//     "image": image.asset->url,
//     inventory,
//     "category": category->title,
//     description,
//     tags
//   }`;

//   const categoriesQuery = `*[_type == "categories"]{
//     _id,
//     title,
//     "image": image.asset->url,
//     products
//   }`;

//   const [products, categories] = await Promise.all([
//     client.fetch(productsQuery),
//     client.fetch(categoriesQuery)
//   ]);

//   return { products, categories };
// }

// export default async function InventoryPage() {
//   const { products, categories } = await getInventoryData();

//   const getStockStatus = (stock: number) => {
//     if (stock === 0) return 'out-of-stock';
//     if (stock < 10) return 'low-stock';
//     return 'in-stock';
//   };

//   return (
//     <div className="p-8 space-y-8">
//       {/* Products Inventory Section */}
//       <section>
//         <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
//           <FiPackage className="text-2xl" /> Product Inventory
//         </h1>
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//           <table className="w-full">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Image</th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Product</th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Category</th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Stock</th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {products.map((product:Producte) => (
//                 <tr key={product._id}>
//                   <td className="px-6 py-4">
//                     {product.image && (
//                       <Image
//                         src={product.image}
//                         alt={product.title}
//                         width={64}
//                         height={64}
//                         className="rounded-lg object-cover"
//                       />
//                     )}
//                   </td>
//                   <td className="px-6 py-4 font-medium">
//                     <div className="flex flex-col">
//                       <span>{product.title}</span>
//                       {product.badge && (
//                         <span className="text-xs text-blue-600 mt-1 flex items-center">
//                           <FiTag className="mr-1" /> {product.badge}
//                         </span>
//                       )}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 text-gray-600">
//                     {product.category || 'Uncategorized'}
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="flex items-center">
//                       <span className="mr-2">{product.inventory}</span>
//                       <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
//                         <div 
//                           className={`h-full ${getStockStatus(product.inventory) === 'out-of-stock' ? 'bg-red-500' : 'bg-green-500'}`}
//                           style={{ width: `${Math.min((product.inventory / 100) * 100, 100)}%` }}
//                         />
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4">
//                     {/* Status badges remain same as before */}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>

    //   {/* Categories Section */}
    //   <section>
    //     <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
    //       <FiGrid className="text-2xl" /> Category Overview
    //     </h2>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {categories.map((category:Producte) => (
    //         <div key={category._id} className="bg-white p-6 rounded-lg shadow-sm">
    //           <div className="flex items-center gap-4">
    //             {category.image && (
    //               <Image
    //                 src={category.image}
    //                 alt={category.title}
    //                 width={64}
    //                 height={64}
    //                 className="rounded-lg object-cover"
    //               />
    //             )}
    //             <div>
    //               <h3 className="text-lg font-semibold">{category.title}</h3>
    //               <p className="text-gray-600 mt-1">
    //                 {category.products} products
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </section>
//     </div>
//   );
// }}