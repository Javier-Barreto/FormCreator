import { DocumentIcon } from '@heroicons/react/24/solid'

export const MainPage = () => {
  return (
    <div className="mx-auto max-w-5xl mt-10">
      <p className="text-4xl text-center">Form Creator</p>

      <p className="text-2xl text-center pt-5">Upload your JSON file or Write it to create your own form</p>

      <form>
        <div className="col-span-full">
          <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
            JSON:
          </label>

          <div className="mt-2">
            <textarea
              id="about"
              name="about"
              rows={5}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              defaultValue={''}
            />
          </div>

          <p className="mt-3 text-sm/6 text-gray-600">Write your JSON file (Note: if you upload a JSON file, it will be loaded here and you can edit it if you want).</p>
        </div>

        <p className="text-base text-center pt-5">Or</p>

        <div className="col-span-full">
          <label htmlFor="json-file-upload" className="block text-sm/6 font-medium text-gray-900">
            Upload JSON:
          </label>

          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">

              <DocumentIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />

              <div className="mt-4 flex text-sm/6 text-gray-600" id="drop_zone">
                <label
                  htmlFor="json-file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                </label>

                <p className="pl-1">or drag and drop</p>
              </div>

              <p className="text-xs/5 text-gray-600">JSON</p>

            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
