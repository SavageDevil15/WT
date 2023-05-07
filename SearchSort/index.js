$(document).ready(function() {
    
    // Searching
    $("#searchButton").click(function() {
        
        var key = $("#key").val();
        var searchData = $("#searchData").val().toString();
        var searchNumberArray = searchData.trim().split(/\s+/);
        var position = null;
        var flag = 0;

        // Linear Search
        for (let i in searchNumberArray)
        {
            if (searchNumberArray[i] == key)
            {
                position = i;
                flag = 1;
                break;
            }
        }

        if (flag == 1)
            $(".modal-body").text("Key Found At Location : " + position);
        else
            $(".modal-body").text("Key Not Found !!!");

        $("#resultsModal").modal("show");
    });

    // Number Sorting
    $("#numberSortButton").click(function() {

        var numberData = $("#numberSortData").val().toString();
        var numbers = numberData.trim().split(/\s+/);
        var sortingMethod = null;

        if ($("#bubbleSort").prop("checked"))
            sortingMethod = 1;
        else if ($("#mergeSort").prop("checked"))
            sortingMethod = 2;

        // Bubble Sort
        if (sortingMethod == 1) 
        {
            let length = numbers.length;
            let flag = false;

            for (let i = 0; i < length; i++)
            {
                flag = false;
                
                for (let j = 0; j < length; j++)
                {
                    if (numbers[j] > numbers[j + 1])
                    {
                        var temp = numbers[j];
                        numbers[j] = numbers[j + 1];
                        numbers[j + 1] = temp;
                        flag = true;
                    }
                }

                if (!flag) break;
            }

            $(".modal-body").text("Sorted Numbers using Bubble Sort : " + numbers);
            $("#resultsModal").modal("show");
        }

        // Merge Sort
        else if (sortingMethod == 2)
        {
            $(".modal-body").text("Sorted Numbers using Merge Sort : " + mergeSort(numbers));
            $("#resultsModal").modal("show");
        }
    });


    // Named Entity Sorting
    $("#namedEntitySortButton").click(function() {

        var stringData = $("#stringSortData").val().toString();
        var stringSort = stringData.trim().split(/\s+/);
        stringSort.sort();
        $(".modal-body").text("Sorted Named Entities : " + stringSort);
        $("#resultsModal").modal("show");
        
    });

});

function merge(left, right)
{
    let arr = [];

    while (left.length && right.length)
    {
        if (left[0] < right[0])
            arr.push(left.shift());
        else
            arr.push(right.shift());
    }

    return [...arr, ...left, ...right];
}

function mergeSort(array)
{
    const half = array.length / 2;

    if (array.length < 2)
        return array;
    
    const left = array.splice(0, half);
    
    return merge(mergeSort(left), mergeSort(array));
}
