<template>
  <div class="row card-body">
    <div class="col-1 px-1">
      <div class="mx-2">
        <p class="text-dark mt-0 mb-0 font-13">Q1</p>

        <span class="card-subtitle text-muted">9cdb97b4</span>
      </div>
    </div>
    <div class="col-10">
      <div class="row">
        <div class="col-7">
          <div class="page_title">
            <input type="text" id="simpleinput" class="form-control" />
          </div>
        </div>
        <div class="col-5">
          <select>
            <option value="questions">questions</option>
          </select>
        </div>
      </div>
    </div>
    <div class="col-1 table m-0 px-1">
      <div class="table-action py-0 border-0 p-0">
        <span class="action-icon btn font-15">
          <i class="mdi mdi-file-multiple"></i>
        </span>
        <span class="action-icon btn">
          <i class="mdi mdi-delete"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Questions"
};
</script>